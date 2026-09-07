import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const attempts = new Map<string, number[]>();

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < 60 * 60 * 1000);
  if (recent.length >= 5) return NextResponse.json({ message: "Too many attempts. Try again later." }, { status: 429 });
  recent.push(now);
  attempts.set(ip, recent);

  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 254) : "";
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ message: "Subscriptions are being configured. Please email us directly." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT ?? 587) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? SMTP_USER,
      to: process.env.NEWSLETTER_SUBMISSION_EMAIL ?? "ruminate.ecell@iiitsurat.ac.in",
      replyTo: email,
      subject: "Ruminate newsletter subscription",
      text: `Please add ${email} to the Ruminate update list.`,
      html: `<p>Please add <strong>${email.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</strong> to the Ruminate update list.</p>`,
    });
    return NextResponse.json({ message: "Subscription received." });
  } catch (error) {
    console.error("Newsletter delivery failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ message: "We could not subscribe you right now." }, { status: 502 });
  }
}
