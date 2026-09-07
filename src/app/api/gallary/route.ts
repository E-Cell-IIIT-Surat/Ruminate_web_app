import { NextRequest, NextResponse } from "next/server";
import galleryDataRaw from "@/data/gallary.json";
import { listR2Objects, publicMediaUrl } from "@/lib/r2";
import { resolveMediaSource } from "@/lib/media";

export const dynamic = "force-dynamic";

type GalleryImage = {
  img: string;
  event: string;
  year?: string;
};

type GalleryData = Record<string, Array<{ img: string; event: string }>>;

const galleryData: GalleryData = galleryDataRaw;
const IMAGE_EXTENSION = /\.(avif|gif|jpe?g|png|webp)$/i;
const R2_CACHE_MS = 60_000;
const DEFAULT_EXCLUDED_ROOTS = new Set([
  "alumni startups",
  "blog page",
  "collabs",
  "contact us",
  "faculties",
  "homepageeventsbanner",
  "homepageslider",
  "live events banner",
  "our team",
  "ruminate logo",
  "speakers till now",
  "starlabs",
  "testimonials",
]);

function excludedRoots() {
  const configured = (process.env.R2_GALLERY_EXCLUDE_PREFIXES ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  return new Set([...DEFAULT_EXCLUDED_ROOTS, ...configured]);
}
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
};

let cachedImages: GalleryImage[] | null = null;
let cachedAt = 0;

function eventLabel(slug: string) {
  const knownEvents: Record<string, string> = {
    "amul-visit": "Amul Visit",
    "corporate crime": "Corporate Crime",
    "e-summit": "E-Summit",
    esummit: "E-Summit",
    "event highlights": "Event Highlights",
    "ipl auction": "IPL Auction",
    ktb: "KTB",
    "smc iccc": "SMC ICCC",
    "speaker s session": "Speaker Session",
  };
  const normalized = slug
    .trim()
    .toLowerCase()
    .replace(/[-_]?\d{8}t\d{6}z(?:-\d+-\d+)?$/i, "")
    .trim();
  if (knownEvents[normalized]) return knownEvents[normalized];
  const knownPrefix = Object.entries(knownEvents).find(([key]) => normalized.startsWith(key + " "));
  if (knownPrefix) return knownPrefix[1];
  return normalized
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .trim() || "Gallery";
}

function galleryObjectMetadata(key: string) {
  const parts = key.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const normalizedRoot = parts[0].trim().toLowerCase();
  const configuredPrefix = (process.env.R2_GALLERY_PREFIX ?? "gallery/").trim().replace(/^\/+|\/+$/g, "");
  const prefixParts = configuredPrefix ? configuredPrefix.split("/").filter(Boolean) : [];
  const isStructuredGalleryPath =
    normalizedRoot === "gallery" || (prefixParts.length > 0 && parts.slice(0, prefixParts.length).join("/") === prefixParts.join("/"));

  if (!isStructuredGalleryPath && parts.length < 2) return null;
  if (!isStructuredGalleryPath && excludedRoots().has(normalizedRoot)) return null;

  const year = parts.find((part) => /^\d{4}$/.test(part));
  const eventIndex = normalizedRoot === "gallery" ? 2 : prefixParts.length;
  const eventPart = isStructuredGalleryPath ? parts[eventIndex] : parts[0];

  return {
    year,
    event: eventPart ? eventLabel(eventPart) : "Gallery",
  };
}

function fallbackImages(): GalleryImage[] {
  return Object.entries(galleryData).flatMap(([year, images]) =>
    images.map((image) => ({
      ...image,
      year,
      img: resolveMediaSource(image.img),
    })),
  );
}

async function loadImages() {
  const existingImages = cachedImages;
  if (existingImages && Date.now() - cachedAt < R2_CACHE_MS) return existingImages;
  const fallback = fallbackImages();
  try {
    const prefix = (process.env.R2_GALLERY_PREFIX ?? "").trim();
    const objects = await listR2Objects(prefix);
    const cloudImages: GalleryImage[] = objects
      .filter((object) => IMAGE_EXTENSION.test(object.key))
      .flatMap((object) => {
        const metadata = galleryObjectMetadata(object.key);
        if (!metadata) return [];
        return [{
          img: publicMediaUrl(object.key),
          event: metadata.event,
          year: metadata.year,
        }];
      })
      .sort((left, right) => left.img.localeCompare(right.img));

    if (cloudImages.length > 0) {
      const known = new Set(cloudImages.map((image) => image.img));
      cachedImages = [...cloudImages, ...fallback.filter((image) => !known.has(image.img))];
      cachedAt = Date.now();
      return cachedImages;
    }
  } catch (error) {
    console.error("Cloudflare R2 gallery listing failed; using the local catalog.", error);
  }
  cachedImages = fallback;
  cachedAt = Date.now();
  return cachedImages;
}

function filterImages(images: GalleryImage[], year: string | null, event: string | null) {
  return images.filter((image) => {
    const yearMatches = !year || year === "All" || image.year === year;
    const eventMatches = !event || event === "All" || image.event === event;
    return yearMatches && eventMatches;
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  const event = searchParams.get("event");
  const images = await loadImages();
  const filteredImages = filterImages(images, year, event);
  const years = [
    "All",
    ...[...new Set(images.map((image) => image.year).filter(Boolean) as string[])]
      .sort((left, right) => right.localeCompare(left)),
  ];
  const events = [
    "All",
    ...[...new Set(images.map((image) => image.event).filter(Boolean))]
      .sort((left, right) => left.localeCompare(right)),
  ];

  if (searchParams.get("catalog") === "1") {
    return NextResponse.json(
      { images: filteredImages, years, events },
      { headers: CACHE_HEADERS },
    );
  }

  return NextResponse.json(filteredImages, { headers: CACHE_HEADERS });
}
