/**
 * Resolves a media key without coupling data files to a storage provider.
 *
 * Existing absolute URLs and local `/public` paths are preserved. New data can
 * store a provider-independent key such as `gallery/2026/esummit/photo-01.webp`.
 */
export function resolveMediaSource(source: string) {
  const value = source.trim();
  if (!value || value.startsWith("/") || /^https?:\/\//i.test(value) || value.startsWith("data:")) {
    return value;
  }

  const baseUrl = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, "");
  return baseUrl ? `${baseUrl}/${value.replace(/^\//, "")}` : `/${value.replace(/^\//, "")}`;
}
