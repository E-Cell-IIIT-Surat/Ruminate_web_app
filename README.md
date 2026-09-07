# Ruminate — E-Cell IIIT Surat

Production website for Ruminate, the Entrepreneurship Cell of IIIT Surat.

## Local development

Requirements: Node.js 20 or newer and npm.

```powershell
cd C:\Users\Acer\Desktop\Ruminate_web_app
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000). On macOS or Linux, use `npm` instead of `npm.cmd`.

Production checks:

```powershell
npm.cmd exec tsc -- --noEmit
npm.cmd run build
npm.cmd run start
```

## Where images currently come from

The project currently has two image sources:

1. **Small, optimized files in this repository**
   - Homepage hero/highlights: `public/home/*.webp`
   - Speaker and contact portraits: `public/home/people/*.webp`
   - Collaboration logos: `public/home/collaborations/*.webp`
   - Ruminate brand mark and small interface assets: `public/`
   - The gallery currently maps these local files in `src/data/gallary.json`.

2. **The existing Cloudflare R2 public bucket**
   - Historical team and alumni photographs in `src/data/team.json` still use URLs beginning with `https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/`.
   - `next.config.ts` temporarily allows that legacy hostname while it is migrated.

`next/image` produces responsive AVIF/WebP derivatives, reserves layout space and lazy-loads non-critical images. Only the first hero image is eager.

## Do not store the growing photo library in GitHub

Git is appropriate for code and a small number of stable brand assets. It is not a media library. Committing every event photograph causes:

- a permanently growing Git history, even after files are deleted;
- slow clones, deployments and CI builds;
- large pull requests and merge conflicts in media metadata;
- no upload permissions, moderation workflow or image lifecycle management;
- GitHub/Git LFS being used as delivery infrastructure instead of a CDN.

Keep only small, rarely changed assets such as logos, icons and the first-page fallback image in Git. As a working limit, repository images should normally be below 250 KB each and the complete `public/` folder should remain small.

## Recommended production media architecture

Use **Cloudflare R2 + a Cloudflare custom CDN domain** because the project already uses R2.

```text
Admin/editor
    │
    ├── current workflow: uploads an optimized file in the R2 dashboard
    │                         (the Gallery discovers it automatically)
    │
    └── future admin portal: requests a short-lived presigned PUT URL
                              and uploads directly to R2
                                      │
                                      ▼
                           website-images (R2)
                                      │
                          media.ecelliiitsurat.in
                           Cloudflare cache/CDN
                                      │
                                      ▼
                           Next.js <Image> component

Metadata: JSON today → database-backed media records when the admin portal is added
Original backups: optional private R2 bucket, never exposed to the website
```

Cloudflare recommends attaching a domain you control to an R2 bucket to serve objects through its cache. Use `media.ecelliiitsurat.in`, not the generated `pub-….r2.dev` hostname. The generated hostname is difficult to replace and does not provide the same production-domain control.

### One-time Cloudflare setup

1. Create or reuse the R2 bucket shown in the dashboard (currently `website-images`).
2. In the bucket, open **Settings → Public access → Custom Domains**.
3. Connect `media.ecelliiitsurat.in`.
4. Configure cache rules for versioned images:
   - `Cache-Control: public, max-age=31536000, immutable`
   - Never overwrite an existing public key; upload a new versioned key instead.
5. Keep the old `pub-….r2.dev` hostname enabled only during migration.
6. Set this in local and production environments:

```env
NEXT_PUBLIC_MEDIA_BASE_URL=https://media.ecelliiitsurat.in
R2_ACCOUNT_ID=<Cloudflare account id>
R2_ACCESS_KEY_ID=<R2 API token access key>
R2_SECRET_ACCESS_KEY=<R2 API token secret>
R2_BUCKET_NAME=website-images
R2_PUBLIC_BASE_URL=https://media.ecelliiitsurat.in
R2_GALLERY_PREFIX=
R2_GALLERY_EXCLUDE_PREFIXES=
```

Create the R2 API token with read-only access to this bucket. These four `R2_*` values are server-only: do not prefix them with `NEXT_PUBLIC_`, commit them to Git, or expose them to browser code. The website already allows the public hostname in `next.config.ts`. After changing environment values, rebuild/restart the site.

Official references: [R2 custom domains and caching](https://developers.cloudflare.com/cache/interaction-cloudflare-products/r2/) and [R2 presigned URLs](https://developers.cloudflare.com/r2/api/s3/presigned-urls/).

### Object naming convention

Use lowercase ASCII names, hyphens, no spaces and immutable/versioned keys:

```text
brand/collaborations/stockgro-v1.webp
events/2026/esummit/hero-v1.webp
gallery/2026/e-summit/2026-02-11-opening-001-v1.webp
team/2025-26/core/member-name-v1.webp
team/alumni/2024-25/member-name-v1.webp
```

Do not use names such as `IMG_4208.JPG`, `Copy of photo.JPG` or paths containing spaces. Do not replace `v1` in place; publish `v2` and update its metadata. This makes one-year CDN caching safe and prevents visitors from seeing stale images.

### Image preparation rules

Before public upload:

- convert photographs to WebP or AVIF;
- strip unnecessary metadata;
- preserve the original aspect ratio;
- hero images: approximately 1920–2400 px wide, target 250–500 KB;
- gallery images: approximately 1600–2000 px wide, target 150–400 KB;
- team portraits: approximately 600–900 px square, target 50–150 KB;
- logos: SVG when an official vector exists, otherwise transparent WebP/PNG, normally below 100 KB;
- never upscale a small source or repeatedly recompress an already compressed file.

Keep archival originals in a private bucket such as `ruminate-media-originals` if the organization needs them. The public website bucket should contain delivery-ready files, not 10–30 MB camera originals.

### Automatic gallery upload workflow

The Gallery now lists the R2 bucket server-side through `src/app/api/gallary/route.ts`. Uploading a supported image to the `gallery/` prefix is enough; no JSON or React code change is required. The API refreshes its listing about once per minute and keeps `src/data/gallary.json` as a local fallback when R2 is unavailable.

1. Optimize and rename the image locally using the rules above.
2. Upload it to `gallery/<year>/<event-slug>/` in the `website-images` bucket.
3. Use a four-digit year and a lowercase event slug. For example:

```text
gallery/2026/e-summit/2026-02-11-opening-001-v1.webp
gallery/2026/amul-visit/2026-02-20-dairy-tour-001-v1.webp
gallery/2026/ktb/2026-03-04-business-tour-001-v1.webp
```

The API derives the year from the second path segment and the visible event label from the third (`e-summit` → `E-Summit`, `amul-visit` → `Amul Visit`, `ktb` → `KTB`). JPEG, PNG, WebP, AVIF and GIF files are supported. With the recommended `gallery/` prefix, objects outside that prefix are ignored; with the current root-folder layout, only the configured non-gallery roots are ignored.

R2 listing credentials never reach the browser. If the listing request fails, the API logs the failure on the server and serves the checked-in fallback catalog instead.

Your current bucket screenshot uses event folders at the root, such as `E-summit/` and `Event Highlights/`, rather than a `gallery/` prefix. That layout is supported too: leave `R2_GALLERY_PREFIX` empty and each top-level event folder becomes a Gallery filter automatically. The API ignores known non-gallery roots such as `Our Team/`, `Faculties/` and `COLLABS/`. Add any additional non-event roots as a comma-separated value in `R2_GALLERY_EXCLUDE_PREFIXES`.

Automatic discovery is intentionally limited to the Gallery. An arbitrary upload cannot tell the site whether it is a hero image, collaboration logo, speaker portrait or team member, so those sections still use curated metadata in their JSON files. The future admin workflow below adds that semantic metadata without putting R2 credentials in the browser.

Team example in `src/data/team.json`:

```json
{
  "name": "Member Name",
  "role": "Team Role",
  "img": "team/2025-26/core/member-name-v1.webp"
}
```

The gallery and team API routes call `src/lib/media.ts`, which converts these keys to `${NEXT_PUBLIC_MEDIA_BASE_URL}/<key>`. Therefore a future CDN or bucket migration requires changing one environment variable instead of editing every component and JSON record. Existing `/local/path.webp` values and full legacy URLs continue to work during migration.

### Future admin upload workflow

The next production phase should provide a role-protected media dashboard:

1. An authenticated editor chooses event, year, caption and image.
2. The server validates file type, size and the requested object key.
3. The server creates a short-lived, content-type-restricted presigned `PUT` URL.
4. The browser uploads directly to R2; R2 credentials are never sent to the browser.
5. The server verifies the uploaded object and writes metadata to a database.
6. The gallery reads paginated metadata from the database and continues using `next/image` for responsive delivery.

Recommended metadata fields:

```text
id, object_key, width, height, bytes, mime_type,
alt_text, caption, event_slug, year, captured_at,
display_order, status, created_by, created_at
```

Use a managed PostgreSQL service such as the institution’s existing database, Neon or Supabase. Store metadata in the database and image bytes in R2. Never store R2 secret keys in `NEXT_PUBLIC_*` variables or client-side code. Presigned URLs should be short-lived, limited to one key and restricted by content type; browser uploads also require a restrictive R2 CORS policy.

### Migration plan for existing images

1. Inventory every `pub-….r2.dev` URL in `src/data/team.json`.
2. Copy the objects into the new naming structure without deleting the originals.
3. Optimize delivery copies and verify orientation/cropping.
4. Replace full legacy URLs with object keys.
5. Test the Team, Home, Events and Gallery routes.
6. Deploy and monitor for image 404s.
7. Keep the old objects for at least one release cycle; remove them only after access logs show no remaining requests.

## Gallery maintenance

The Gallery API lists the live R2 `gallery/` prefix and derives its year/event filters from the listing. Local images may still be placed in `public/gallery/<year>/` for development or a very small permanent set, but new production event collections should use R2.

For production gallery uploads, add the image to R2 using the naming convention above. Update `src/data/gallary.json` only when you want a local-development fallback or a permanent repository image.

Do not commit camera originals to `public/gallery/`.

## UDHBHAV participation

This website is informational only. Idea submission and participant authentication are handled by the official UDHBHAV portal at https://portal.ecelliiitsurat.in/udbhav. The public website does not collect or deliver UDHBHAV registration data, and no submission credentials belong in this repository.
