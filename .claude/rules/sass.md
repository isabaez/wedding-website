---
paths:
  - "src/app/styles/**/*.scss"
  - "next.config.mjs"
---
# Sass

- `@import` is deprecated since Dart Sass 1.80.0 and will be removed in Dart Sass 3.0.0; new code uses `@use` /
  `@forward`. Don't add `@import`s. `next.config.mjs` loads `_variables.scss` into every file with
  `@use "variables" as *;` (`sassOptions.additionalData`, found through `sassOptions.loadPaths`), so don't `@use` it
  again. Turbopack (the default bundler) doesn't resolve the `~` prefix in Sass imports, and in #37 it didn't resolve
  the project-root path `src/app/styles/variables` either: put shared Sass on `sassOptions.loadPaths`.
  Source: https://sass-lang.com/documentation/breaking-changes/import/ (checked 2026-11-13)
  Source: https://nextjs.org/docs/app/api-reference/turbopack#sass-node_modules-imports (checked 2026-11-14)
- Global built-in functions (`darken()`, `map-get()`) are deprecated too: use the module forms (`color.adjust`,
  `map.get`) after `@use "sass:color"` / `@use "sass:map"`.
  Source: https://sass-lang.com/documentation/breaking-changes/import/ (checked 2026-11-13)
