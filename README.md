# Wedding website

The wedding's website for guests: event information, the Italy trip, a photo gallery, the registry and an RSVP form.
It is a [Next.js](https://nextjs.org) site exported as static files and published on GitHub Pages; there is no
backend (RSVPs are sent to Web3Forms from the browser).

## Getting Started

Prerequisites: Node.js 24 or later (`engines` in package.json; CI and the deploy workflow use 24) and npm (the repo has a `package-lock.json`).

```bash
npm ci          # install the pinned dependencies
npm run dev     # dev server at http://localhost:3000
npm run lint    # ESLint
npm run build   # static export to out/, as the deploy does
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Pages live in
`src/app/<route>/page.js` and auto-update as you edit them.

Fonts are loaded from `src/app/fonts/` with [`next/font/local`](https://nextjs.org/docs/app/api-reference/components/font#local-fonts).

## Directory layout

```text
src/app/              App Router routes: page.js (home), information/, italy/, gallery/, registry/, rsvp/
src/app/layout.js     root layout: fonts, base styles and site metadata (title, description, noindex)
src/app/components/   navigation, footer, accordion item, floating-label input, RSVP form
src/app/hooks/        React hooks (prefers-reduced-motion)
src/app/styles/       one SCSS file per page or component; _variables.scss is @use'd into all of them
src/app/fonts/        local font files
public/               images served as-is (gallery photos, icons, villa photos)
next.config.mjs       static export, Sass options, unoptimized images
.github/workflows/    ci.yml: lint and build on PRs and beta; nextjs.yml: deploy to GitHub Pages; security.yml
CNAME                 the custom domain for GitHub Pages
```

## Deploy

Merging the `[ production deploy ]` pull request into `main` runs `.github/workflows/nextjs.yml`, which builds the
static export and publishes `out/` to GitHub Pages. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Static Exports](https://nextjs.org/docs/app/guides/static-exports) - what a static export supports.

## Working with Claude Code

This project is set up for [Claude Code](https://code.claude.com/docs). [CLAUDE.md](CLAUDE.md) holds the rules
Claude follows here; [CONTRIBUTING.md](CONTRIBUTING.md) describes the same workflow for people.

**Skills** (run with `/<name>`, or Claude runs them when they apply):
- `/update-changelog`: the dev runs it before a production deploy to write the release notes in CHANGELOG.md.
- `/update-readme`: checks this README against the code and fixes what drifted.
- `/update-claude-md`: keeps CLAUDE.md accurate; `/update-claude-md deep` audits it thoroughly.
- `/update-contributing`: keeps CONTRIBUTING.md in step with the workflow.

**Agents** (Claude runs them before opening a pull request):
- `code-reviewer`: reviews a branch's changes for bugs, regressions and the project's conventions.
- `security-auditor`: audits changes for security problems, including where RSVP data goes.
- `docs-reviewer`: checks the README, CLAUDE.md and CONTRIBUTING.md against the change.
- `test-engineer`: writes and runs tests for changed logic (it will propose a test runner first; there is none yet).
- `accessibility-auditor`: audits UI changes against WCAG 2.2 AA in the running site.
- `design-reviewer`: reviews UI changes for consistency with the design tokens, after the accessibility audit.
- `workstream-builder`: builds one scoped part of a large change in its own worktree.

**Rules:** `.claude/rules/` holds stack-specific conventions that load with matching files: `nextjs.md` (static
export limits), `react.md` (component and hook rules), `sass.md` (the `@import` deprecation) and `accessibility.md`
(accordion, carousel and form label patterns), plus `git-workflow.md`, the full git workflow, which loads in every
session.

**Hooks:** a git guard blocks the git and gh commands the workflow never allows (merging into `develop` or `main`,
force pushes, discarding uncommitted work, editing CHANGELOG.md outside a release branch, …).
