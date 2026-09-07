import { createHash, createHmac } from "node:crypto";

const REGION = "auto";
const SERVICE = "s3";
const EMPTY_PAYLOAD_HASH = createHash("sha256").update("").digest("hex");

export type R2Object = {
  key: string;
  size: number;
  lastModified?: string;
  etag?: string;
};

function encode(value: string) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
}

function hmac(key: Buffer | string, value: string) {
  return createHmac("sha256", key).update(value).digest();
}

function text(value: string | undefined) {
  return (value ?? "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function configured() {
  return Boolean(
    process.env.R2_ACCOUNT_ID &&
      process.env.R2_ACCESS_KEY_ID &&
      process.env.R2_SECRET_ACCESS_KEY &&
      process.env.R2_BUCKET_NAME,
  );
}

export function isR2Configured() {
  return configured();
}

export function publicMediaUrl(key: string) {
  const base = (process.env.R2_PUBLIC_BASE_URL ?? process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "").replace(/\/$/, "");
  return base ? `${base}/${key.split("/").map(encode).join("/")}` : `/${key}`;
}

export async function listR2Objects(prefix: string): Promise<R2Object[]> {
  if (!configured()) return [];

  const accountId = process.env.R2_ACCOUNT_ID as string;
  const accessKey = process.env.R2_ACCESS_KEY_ID as string;
  const secretKey = process.env.R2_SECRET_ACCESS_KEY as string;
  const bucket = process.env.R2_BUCKET_NAME as string;
  const host = `${accountId}.r2.cloudflarestorage.com`;
  const canonicalUri = `/${encode(bucket)}`;
  const objects: R2Object[] = [];
  let continuationToken = "";

  for (let page = 0; page < 100; page += 1) {
    const queryEntries = [
      ["list-type", "2"],
      ["prefix", prefix],
      ...(continuationToken ? [["continuation-token", continuationToken]] : []),
    ] as Array<[string, string]>;
    const canonicalQuery = queryEntries
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, value]) => `${encode(key)}=${encode(value)}`)
      .join("&");
    const now = new Date();
    const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    const dateStamp = amzDate.slice(0, 8);
    const canonicalHeaders = `host:${host}\nx-amz-content-sha256:${EMPTY_PAYLOAD_HASH}\nx-amz-date:${amzDate}\n`;
    const signedHeaders = "host;x-amz-content-sha256;x-amz-date";
    const canonicalRequest = ["GET", canonicalUri, canonicalQuery, canonicalHeaders, signedHeaders, EMPTY_PAYLOAD_HASH].join("\n");
    const credentialScope = `${dateStamp}/${REGION}/${SERVICE}/aws4_request`;
    const stringToSign = [
      "AWS4-HMAC-SHA256",
      amzDate,
      credentialScope,
      createHash("sha256").update(canonicalRequest).digest("hex"),
    ].join("\n");
    const dateKey = hmac(`AWS4${secretKey}`, dateStamp);
    const regionKey = hmac(dateKey, REGION);
    const serviceKey = hmac(regionKey, SERVICE);
    const signingKey = hmac(serviceKey, "aws4_request");
    const signature = createHmac("sha256", signingKey).update(stringToSign).digest("hex");
    const authorization = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
    const endpoint = `https://${host}${canonicalUri}?${canonicalQuery}`;
    const response = await fetch(endpoint, {
      headers: {
        Authorization: authorization,
        Host: host,
        "x-amz-content-sha256": EMPTY_PAYLOAD_HASH,
        "x-amz-date": amzDate,
      },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`R2 listing failed with ${response.status}`);
    const xml = await response.text();
    const contentBlocks = [...xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)];
    for (const [, block] of contentBlocks) {
      const key = text(block.match(/<Key>([\s\S]*?)<\/Key>/)?.[1]);
      if (!key) continue;
      objects.push({
        key,
        size: Number(block.match(/<Size>(\d+)<\/Size>/)?.[1] ?? 0),
        lastModified: text(block.match(/<LastModified>([\s\S]*?)<\/LastModified>/)?.[1]),
        etag: text(block.match(/<ETag>([\s\S]*?)<\/ETag>/)?.[1]),
      });
    }
    continuationToken = text(xml.match(/<NextContinuationToken>([\s\S]*?)<\/NextContinuationToken>/)?.[1]);
    if (!continuationToken) break;
  }
  return objects;
}
