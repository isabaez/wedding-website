---
paths:
  - "src/app/**/*.js"
  - "next.config.mjs"
---
# Next.js (static export)

- The site is built with `output: 'export'`: `next build` writes plain files to `out/`. Anything that needs a server
  at request time is unsupported: cookies, rewrites, redirects, headers, middleware/proxy, ISR, draft mode, server
  actions and intercepting routes.
  Source: https://nextjs.org/docs/app/guides/static-exports#unsupported-features (checked 2026-11-13)
- A dynamic route (`[slug]`) must export `generateStaticParams()`; `dynamicParams: true` is unsupported.
  Source: https://nextjs.org/docs/app/guides/static-exports#unsupported-features (checked 2026-11-13)
- The default `next/image` loader doesn't work in an export; this project sets `images.unoptimized: true`, so image
  files ship as they are.
  Source: https://nextjs.org/docs/app/guides/static-exports#image-optimization (checked 2026-11-13)
- Client components are still prerendered at build time: touch `window`, `document` or `localStorage` only inside
  `useEffect` or an event handler.
  Source: https://nextjs.org/docs/app/guides/static-exports#browser-apis (checked 2026-11-13)
