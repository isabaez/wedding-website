# Wedding website — working agreements

Static wedding website: Next.js 16 App Router with static export (`output: 'export'`), React 19, JavaScript, Sass and
Swiper; `next dev` and `next build` use Turbopack, and it expects Node 24 or later (`engines`; npm warns on older).
`npm run dev` serves it on **3000**; `npm run build` writes the static site to `out/`, which GitHub Pages serves. No
backend: the RSVP form posts from the browser to Web3Forms. README.md is the product doc: read the section for the
area you are touching before changing it.

## Commands

```bash
npm ci          # install exactly what package-lock.json pins (CI does the same)
npm run dev     # dev server on http://localhost:3000
npm run lint    # eslint . with eslint-config-next/core-web-vitals (flat config in eslint.config.mjs)
npm run build   # static export to out/; the deploy runs this same build, so it must pass
```

- There is no test runner yet; lint and build are the checks before a PR. `.github/workflows/ci.yml` runs
  `npm ci`, lint and build (Node 24), then checks every page's `out/<route>.html`, on every PR into `develop` and
  every push to `beta`.
- `npm run start` doesn't serve a static export; preview `out/` with any static file server instead.

<!-- init-project:git-workflow v3 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Git workflow

The full rules are in `.claude/rules/git-workflow.md`, which loads in every session; CONTRIBUTING.md describes the
same workflow for people. A hook (`.claude/hooks/git-guard.py`) blocks the commands the workflow never allows.

| Branch | Holds | Rules for Claude |
|---|---|---|
| `main` (or `master`) | Production | Never branch from it, open a PR into it, merge into it or push to it. The dev deploys by merging `develop` in a PR titled exactly `[ production deploy ]`. |
| `develop` | Reviewed work waiting for production; the base for all work | Cut every branch from an up-to-date `origin/develop` and open every PR into it. Never merge into it, commit on it or push to it. |
| `beta` (or `deploy`) | Features in review, merged together for QA | Merge a branch into it only when the dev asks. Never branch from it, merge it anywhere, or open a PR from or into it. |

- **Ask first:** show the exact command and wait for the dev's yes before any git or gh command that changes
  something (commit, push, pull, merge, switch, branches, worktrees, issues, PRs). Read-only commands run freely.
- **Issues:** every feature and fix has one; always ask before creating an issue or linking work to one.
- **Branches:** `feature/<issue>-<short-description>` or `fix/<issue>-<short-description>` from `origin/develop`;
  sub-branches `<branch>--<part>`. Catch up by merging `origin/develop` in; never rebase or force-push pushed work.
- **Pull requests:** into `develop`, body starting `Closes #<issue>`; run the project agents first. No changelog
  bullet: the dev writes the release notes with `/update-changelog`. The dev reviews and merges.
- **Always:** never stash, discard or reset uncommitted work; delete a branch only when the dev approves; never
  commit secrets; in a public repo keep personal and sensitive data out of files, commits, issues and PRs.
<!-- /init-project:git-workflow -->

### Branches in this project

- Production is `main`; QA is `beta`. Pushing to `main` deploys the live site (Deployment, below), so `main` changes
  only through the `[ production deploy ]` PR from `develop`.
- A ruleset protects `main` and `develop`: no deletion, no force push, changes only through a PR (no approvals
  needed).
- Nothing to restart after a merge into `beta`: it's a static site with no services.
- History: PRs #22 and #23 were merged straight into `main`; #25 brought them into `develop`.

<!-- init-project:changelog v2 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Changelog

`CHANGELOG.md` follows Keep a Changelog: `## [Unreleased]`, then releases `## [YYYY-MM-DD]` (the day the
`[ production deploy ]` merge reached production), newest first, each with `### Added`, `### Changed`, `### Removed`,
`### Fixed`, `### Security` in that order, only the ones that have bullets.
- **Only the dev writes it**, with `/update-changelog` before a production deploy: it cuts `changelog/<date>` from
  an up-to-date develop, writes a bullet for everything merged since the last release under `## [<date>]`, and opens
  a PR into develop. Claude never edits CHANGELOG.md or runs that skill on its own, and pull requests need no
  bullet. A hook blocks edits and commits of CHANGELOG.md outside a `changelog/` branch, so it is never changed on a
  feature branch, develop, production or the QA branch.
- One user-visible change per bullet, the reason in the wording, the issue at the end: "Export file names include
  the date, so exports from different days don't overwrite each other (#5)". Never invent a reason: ask the dev, and
  if there is none, state just the change. A correction to a release is a new bullet in the next one.
- Check it with `python3 .claude/skills/update-changelog/scripts/changelog.py lint CHANGELOG.md` from the repo root
  (`normalize --write` tidies it).
<!-- /init-project:changelog -->

## Architecture

- **Routes** are folders under `src/app/` with a `page.js`: `/` (`src/app/page.js`), `/information`, `/italy`,
  `/gallery`, `/registry`, `/rsvp`. `src/app/layout.js` is the root layout: it loads the two local fonts and
  `base.scss`.
- **Components** live in `src/app/components/` (`navigation`, `footer`, `accordion-item`, `floating-label-input`,
  `rsvp-form`) and are imported as `@components/<name>` (aliases in `jsconfig.json`).
- **Styles**: one SCSS file per page or component in `src/app/styles/`, imported by that file as
  `@styles/<name>.scss`. `next.config.mjs` adds `@use "variables" as *;` to every SCSS file
  (`sassOptions.additionalData`, resolved through `sassOptions.loadPaths`), so the variables in `_variables.scss`
  (colours, font stacks) work everywhere without an import.
- **Fonts**: Hamilton Script and Prairie Sans from `src/app/fonts/` (`hamilton-script.woff2`, `Prairie-Sans.woff`, the
  only files there), loaded with `next/font/local` in `layout.js` and exposed as `--font-hamilton-script` /
  `--font-prairie-sans` (`$serif` / `$sansSerif` in `_variables.scss`).
- **Images** sit in `public/` and render through `next/image` with `images.unoptimized: true` (static export has no
  image optimizer), so files ship as they are.
- **Client components** (`'use client'`): `rsvp-form`, `accordion-item`, the gallery and RSVP pages. State is local
  component state only; the RSVP form sends `FormData` to the Web3Forms API and shows a success or error message.

## Recipes

### Add a page
1. Create `src/app/<route>/page.js` exporting a default component; copy the back link and `<h1 className="… h1">`
   from `src/app/italy/page.js`.
2. Create `src/app/styles/<route>.scss` with a kebab-case root class (`.rsvp-page` is the model) and import it in
   the page as `@styles/<route>.scss`.
3. Link it from `src/app/components/navigation.js`, or from a page, if guests should find it.
4. `npm run lint` and `npm run build`; check `out/<route>.html` exists, and add `<route>` to the page list in
   `.github/workflows/ci.yml` (its "Check that every page was exported" step).

### Add an information section
1. In `src/app/information/page.js` (or `src/app/italy/page.js`), add an `<AccordionItem title=… content={…} />`;
   `disableToggle` renders it always open, as a plain heading with no button. A collapsed panel is `inert`, so its
   links stay out of the tab order.
2. Styles for the section go in that page's SCSS file; accordion styles in `src/app/styles/accordion-item.scss`.

### Change a design element
1. Colours and font stacks: `src/app/styles/_variables.scss` (applies to every SCSS file).
2. Shared elements (`.h1`–`.h6`, `.cta`, `.back-link`, base typography): `src/app/styles/base.scss`.
3. Anything else: the SCSS file named after the page or component.

<!-- init-project:conventions v1 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Code conventions and accessibility

These apply to new and changed code; existing code is brought in line through its refactor issue, not in passing.
Stack-specific practice from the official docs is in `.claude/rules/`, which loads with the files it covers.
- **Names:** descriptive, not verbose. No single-letter names, loop counters and callback parameters included
  (`index`, `event`, `error`).
- **CSS:** BEM with descriptive block names (`savings-card__total--negative`); never style by id. Style state through
  its semantic attribute when one exists (`[aria-expanded="true"]`, `[aria-current]`, `:disabled`), else a modifier.
- **JS hooks:** prefer the framework's refs. When a script has to find an element, use a `js-` prefixed class
  (`js-period-toggle`) that is never styled; never hook onto a styling class.
- **Accessibility (WCAG 2.2 AA):** native elements first; everything works by keyboard alone, in a logical order,
  with a visible focus indicator and no traps; every control has an accessible name; text contrast 4.5:1 (3:1 for
  large text and UI parts); colour is never the only signal; respect `prefers-reduced-motion`; targets ≥ 24×24 px.
- **Legibility:** body text 16px or more, set in `rem`; line-height 1.5 or more; lines of about 80 characters at
  most; layouts survive 200% zoom and a 320px-wide viewport.
- **Helpers:** reuse the project's accessibility helpers (listed below). When a pattern repeats (visually hidden
  text, skip link, focus management, live announcements), add a helper instead of a one-off.
<!-- /init-project:conventions -->

### Conventions in this project

- Class names: new blocks are kebab-case BEM named after the page or component (`.rsvp-page`,
  `.accordion-item__toggle`). The PascalCase page blocks (`.Home`, `.Gallery__caption`) are older code, renamed only
  through a refactor issue. Existing state class: `.is-active` (the accordion styles its state through
  `[aria-expanded]`).
- Imports use the `@components/` and `@styles/` aliases, not relative paths.
- JavaScript only, no TypeScript; no CSS Modules or CSS-in-JS.

### Accessibility in this project

- No shared helpers yet: no visually hidden class, skip link, `:focus-visible` styles or reduced-motion handling.
  Five rules remove focus outlines with no replacement (`accordion-item.scss`, `floating-label-input.scss`,
  `gallery.scss`).
- Form fields use `FloatingLabelInput`, which ties each `<label>` to its input by `id` (`input-<name>`).
- The design is dark only (black background); `base.scss` sets `color-scheme: dark` under
  `prefers-color-scheme: dark`. There is no contrast check.

<!-- init-project:agents v2 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Agents

Project agents live in `.claude/agents/`. Before opening or updating a PR, run the ones this project has that apply,
giving each the absolute path of the checkout or worktree. `test-engineer` goes first, alone; then the rest in one
message, except `design-reviewer`, which starts after `accessibility-auditor` returns (they share the browser).
- `test-engineer`: logic changed without matching tests. `code-reviewer`: always.
- `security-auditor`: the diff touches an area its "This project" section lists, or adds dependencies, endpoints,
  file or network access, or secret handling.
- `accessibility-auditor`, then `design-reviewer`: UI files changed.
- `docs-reviewer`: behaviour, commands, config, env vars or ports changed; it also checks CONTRIBUTING.md, the README's
  Claude section, that the PR body gives the reason and that CHANGELOG.md is untouched. `workstream-builder`: one
  sub-branch, in a worktree Claude made.
Fix each finding or list it as deferred in the PR body. Prefer these agents over the built-in `/code-review` and
`/security-review`: they know this project.
<!-- /init-project:agents -->

## Deployment

- `.github/workflows/nextjs.yml` runs on every push to `main` (and by hand): Node 24, `npm ci`, `next build`, then
  uploads `out/` and deploys it to GitHub Pages. `CNAME` sets the custom domain. It is the only workflow that runs
  these deploy actions, so a change to it is first tested by the next production deploy.
- Every workflow pins actions by full commit SHA with the version in a comment; Dependabot bumps them. Tag pins
  fail the Security workflow's zizmor job.
- The deploy workflow's `actions/configure-pages` (`static_site_generator: next`) edits the Next.js config during
  the build; local builds and `ci.yml` don't get that change.
- **The site is unlisted**: `metadata.robots` in `src/app/layout.js` puts `noindex, nofollow, noimageindex` on every
  page, so it's shareable by link but kept out of search results, images included. Metadata merges shallowly: a page
  that sets its own `robots` replaces this one, so it has to repeat all three. Don't add a `robots.txt` with
  `Disallow: /` (crawlers then can't read the noindex) or a sitemap. After the move off GitHub Pages, also send
  `X-Robots-Tag: noindex, nofollow, noimageindex` from the CDN, which also covers the image files themselves.

## Gotchas

- **`/italy` isn't linked from any page**: guests reach it by direct URL.
- **The Italy page broke the build once** and was removed (commit c9eaa33) before it came back in #22: run
  `npm run build`, not only `npm run dev`, before a PR.
- **`package.json` `overrides` forces `minimatch` ^11.0.1 under `@typescript-eslint/typescript-estree`** (lint only):
  typescript-eslint pins `^10.2.2`, which has GHSA-g3hv-75wg-m249. It only calls `minimatch()`, which 11 keeps. Remove
  the override once typescript-eslint allows minimatch 11.
- **Dependency updates wait 7 days** (Dependabot `cooldown`); install by hand with `npm install --before=<7 days ago>` to
  match. ESLint stays on 9 until the plugins eslint-config-next bundles (`eslint-plugin-react`, `-jsx-a11y`, `-import`)
  allow 10.
- **`public/` holds about 60 MB of PNGs** and images aren't optimized at build time: compress new images before adding
  them.
