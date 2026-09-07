# Gallery media

This directory is only for a very small permanent local set or development fixtures. Do not commit growing event galleries or camera originals here.

Production photos should be optimized, uploaded to Cloudflare R2 and recorded in `src/data/gallary.json` by provider-independent object key:

```json
{ "img": "gallery/2026/amul-visit/2026-01-10-group-001-v1.webp", "event": "Amul Visit" }
```

See the root `README.md` for the complete R2 custom-domain architecture, naming rules, size limits, upload process, migration plan and future admin portal design.
