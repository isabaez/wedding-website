# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); releases are named by the date they reached production,
and each entry says why the change was made.

## [Unreleased]

## [2026-11-13]

### Added

- CI runs `npm ci`, `npm run lint` and `npm run build` on every pull request into `develop` and push to `beta`, and
  checks that every page was exported, since pull requests had no lint or build check (#39)
- CONTRIBUTING.md describes the branch workflow, the checks before a pull request, QA on `beta` and releasing;
  README.md replaces the create-next-app boilerplate with setup, directory layout and deploy steps; and CHANGELOG.md
  records each release (#26)

### Changed

- Every page carries `noindex, nofollow, noimageindex`, so the site stays shareable by link but its event details,
  venues, dates and photos stay out of search results (#41)
- **Breaking:** the project needs Node 24 or later (`engines`), matching CI and the deploy workflow, and
  `npm run lint` runs `eslint .` because Next.js 16 removed `next lint`: install Node 24 before running it (#37)

### Fixed

- Every focusable element shows a visible focus ring (a white outline over a black band), since keyboard users
  couldn't see focus on the accordion toggles, the RSVP text fields or the gallery arrows (#33)
- The RSVP attendance radios can be reached and switched by keyboard; they were hidden with `display: none`, so
  keyboard users couldn't answer "Will you be in attendance?" (#33)
- The RSVP error is announced to screen readers and the thank-you moves focus to its heading, so screen reader users
  can tell whether their RSVP went through (#34)
- CSS transitions and the gallery cross-fade finish at once when the OS asks for reduced motion, which people with
  that setting still got (#35)
- The accordion caret draws in full: its SVG path had full-width digits from a paste, so the end of the icon was
  missing and the browser logged SVG errors (#40)
- Accordion buttons sit inside their heading and say whether they're open (`aria-expanded`), and links in collapsed
  panels are out of the tab order, so screen reader and keyboard users can tell what's open and don't land on hidden
  links (#40)
- Open accordion panels follow their content's height, so zooming or rotating a phone no longer clips them (#40)
- The schedule of events image's alt text gives the full schedule, which was only in the image's pixels (#40)
- The RSVP form shows its error message when the request fails (network error, error response, a reply that isn't
  JSON), where it used to show nothing (#40)
- Submit ignores presses while the RSVP is sending, so a double click can't send two RSVPs (#40)
- The links from `/rsvp` to the information page and from `/information` to the registry no longer reload the whole
  site (#40)

### Security

- Next.js is upgraded from 15.4.6 to 16 (with React 19.3), which had 35 open advisories, 4 of them critical (#37)
- Swiper is upgraded from 11 to 14 and other packages updated, so `npm audit` reports no vulnerabilities (it listed
  16, the critical one in Swiper 11) (#38)
- The deploy workflow pins its actions by commit SHA, grants write permissions only to the deploy job and doesn't
  keep credentials after checkout, so it passes the Security workflow's zizmor check (#39)
- Dependabot opens weekly update and security pull requests, a Security workflow (gitleaks, OSV-Scanner, zizmor,
  Trivy) checks every pull request into `develop`, and SECURITY.md says how to report a vulnerability (#26)

## [2026-04-01]

### Added

- An Italy page at `/italy` with the destination wedding's schedule, the two villas, dress code and what to pack;
  information sections can now start open (#20)

### Changed

- The home page's call to action links to the registry and the site navigation links to the RSVP page, for the text
  blast (#21)
- The information page shows the schedule of events and a registry section (#21)

## [2025-11-07]

### Changed

- Final styles, images and copy across the site: the RSVP form and page are restyled, the information page gains
  sections and the gallery spacing is adjusted (341b5b9, 6804751, 4fea94e, 1690157, 9465159)

## [2025-10-23]

### Added

- An image on the home page (62ce3cc, f633c79)

## [2025-10-22]

### Added

- The crest in the footer and on the information and registry pages (8b31acd)

### Changed

- Updated gallery images (8a3d18a)

## [2025-10-12]

### Changed

- Information page copy (dbc8719)

## [2025-10-10]

### Changed

- The registry link's styling and the cherub image (e722a4d, 75d111a)

## [2025-10-03]

### Added

- Site navigation on the home page (0cde115)

### Changed

- Spacing on phones (b88b7a7)

## [2025-10-02]

### Changed

- Styles on the home, gallery, information and registry pages (693af7b)

## [2025-09-24]

### Added

- A registry page, and a cherub icon on the home page (a9707a3)

### Changed

- More content on the information page (a9707a3)

## [2025-09-23]

### Added

- An information page, first version (60f0480, 1f0a7bb)

### Changed

- Updated gallery images (60f0480)

## [2025-09-18]

### Changed

- Gallery page layout, and the RSVP page's copy and spacing (bc72ae5)

## [2025-09-11]

### Changed

- Gallery layout and the site's fonts (f7abead)

## [2025-09-10]

### Added

- A gallery page with a photo carousel (49537cd)

## [2025-09-01]

### Added

- The home page and an RSVP page with a form that emails each response (fc3677c, a51b754, 5d9e3cd)

## [2025-08-22]

### Added

- The first version of the site, built as a static export and published on GitHub Pages under its custom domain
  (90c729d, 6cb6379, 1e55e12, bdb97c5)

### Removed

- The empty Italy 2027 page, because it made the build fail (c9eaa33)
