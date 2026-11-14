---
paths:
  - "src/app/styles/**/*.scss"
  - "next.config.mjs"
---
# Sass

- `@import` is deprecated since Dart Sass 1.80.0 and will be removed in Dart Sass 3.0.0; new code uses `@use` /
  `@forward`. Don't add `@import`s. (`next.config.mjs` still prepends `_variables.scss` with one; moving it to
  `@use … as *` is its own change.)
  Source: https://sass-lang.com/documentation/breaking-changes/import/ (checked 2026-11-13)
- Global built-in functions (`darken()`, `map-get()`) are deprecated too: use the module forms (`color.adjust`,
  `map.get`) after `@use "sass:color"` / `@use "sass:map"`.
  Source: https://sass-lang.com/documentation/breaking-changes/import/ (checked 2026-11-13)
