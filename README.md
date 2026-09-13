# Lucky 4D with Caishen

**BUILD BY RAT / LAB / 001** — a playful random-number generator and a journal of AI-assisted development with Codex.

**Live demo:** [Lucky 4D with Caishen](https://seonglinchua.github.io/caishen-4d-generator/)

Generate a four-digit number, copy or share it, and read how the project evolved through human direction, implementation, and browser review. This is an entertainment experiment: random numbers do not predict lottery results or improve winning odds.

## What’s included

- Random numbers from `0000` to `9999`, with leading zeros preserved. Repeated numbers are possible.
- Copying with success feedback and a manual-copy message on failure.
- Native sharing where supported, with Facebook, X, and WhatsApp fallbacks.
- A quiet Build By Rat brand header and four editorial chapters: the idea, collaboration, review, and lesson.
- A cream, red, and gold visual system, transparent browser favicon, Apple touch icon, and social-preview artwork.
- A brief mascot greeting, number pulse, and one 18-particle celebration confined to the generator.
- Reduced-motion support, visible keyboard focus, and live result announcements.

The current version is a 4D showcase. It does not include the earlier TOTO generator.

## Run locally

Clone the repository and serve its root:

```sh
git clone https://github.com/seonglinchua/caishen-4d-generator.git
cd caishen-4d-generator
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://localhost:8000**. Stop the server with **Ctrl+C**. If you already have the project locally, run only the server command from its folder.

No package installation, framework, backend, or build step is required. Python 3 is used only for local serving. Styles, fonts, and artwork load locally; external sharing services require an internet connection.

Use localhost or HTTPS to test clipboard and native sharing. Native sharing is shown only when the browser exposes that capability.

## Project structure

```text
index.html                         Page markup and metadata
favicon.ico                        Transparent multi-size browser icon
assets/
  css/styles.css                   Layout, brand styles, and animations
  js/app.js                        Generation, copying, sharing, and cleanup
  images/
    caishen.png                    Active transparent mascot
    social-preview.jpg             1200×630 sharing card
  icons/
    favicon-32.png                 Transparent browser icon
    apple-touch-icon.png           Cream-backed home-screen icon
  vendor/fontawesome/              Local icon CSS, fonts, and license
docs/design/
  README.md                        Artwork notes
  archive/                         Unused artwork experiments
README.md                          Project guide
```

Archived artwork is preserved for reference and is not loaded by the page. See [design notes](docs/design/README.md).

## Layout and interaction

Wide screens use a 55/45 split: the development journal on the left and generator on the right. At 900px and below, the generator comes first and the story follows. There is one shared scroll area. The generator is sticky only when the viewport is at least 901px wide and 850px tall.

Copying and sharing stay disabled until a number exists. Platform sharing appears when native sharing is unavailable, or after a native-sharing failure. Canceling native sharing does not display an error.

Each new generation cancels the previous celebration. Timer tracking removes completed tasks, and asynchronous copy/share feedback is guarded against a newer result replacing the old one.

## Mascot and branding

The mascot’s head, body, and hands with ingot are CSS-clipped regions of the same transparent PNG. They are presentation layers, not independently illustrated artwork. Small overlapping regions and restrained motion reduce seams; browsers without clipping support use the original image. Inspect moving edges before increasing the animation range.

The mascot rests between generations. Reduced-motion preferences disable the greeting, layer movement, number pulse, and fireworks, including active celebrations when the preference changes.

The browser favicon uses the original full transparent mascot. The generated face-only artwork is cream-backed and retained for home-screen branding and design reference. Opaque mascot experiments remain archived rather than being used on the page.

Font Awesome 6.6.0 is stored locally. Its [license](assets/vendor/fontawesome/LICENSE.txt) is included. Decorative icons are hidden from assistive technology; button labels describe the actions.

## AI-assisted development

Build By Rat set the direction, reviewed screenshots, and selected revisions. Codex assisted with code review, project organization, interaction implementation, accessibility improvements, and branding exploration.

The editorial journal describes both improvements and corrections. Browser review exposed stale styles and unwanted backgrounds in generated artwork; those results informed subsequent revisions. AI assistance did not replace human judgment or browser testing.

## Development and validation

Edit markup in `index.html`, styling in `assets/css/styles.css`, and behavior in `assets/js/app.js`.

The CSS and JavaScript references include content-based `?v=` values to avoid stale browser copies. Update the corresponding value when changing either file. Refresh with **Cmd+Shift+R** on macOS if the browser still displays an earlier version.

Basic checks:

```sh
node --check assets/js/app.js
git diff --check
```

Node.js is needed only for the JavaScript syntax check. No automated test suite is currently committed. Selected behaviors were verified using temporary JavaScript checks, including leading zeros, copying feedback, sharing visibility, repeat cancellation, particle cleanup, and reduced motion.

Before release, verify:

- Desktop and mobile layouts, narrow screens, zoom, and sticky scrolling.
- Keyboard navigation, focus visibility, and screen-reader result announcements.
- Copy success/failure and native/platform sharing on real devices.
- Rapid repeated generation, reduced motion, and mascot animation seams.

Desktop screenshots have been reviewed. Full mobile, screen-reader, cross-browser, and real-device sharing validation remains incomplete.

## Publishing

Deploy `index.html`, `favicon.ico`, and the complete `assets/` folder to a static host, preserving relative paths. The `docs/` folder is not required at runtime. The live site is hosted on GitHub Pages, configured to publish from the root of `main` with HTTPS enforced.

Before public release:

1. Supply the Build By Rat collection URL and turn **All Experiments (coming soon)** into a working link.
2. Replace relative `og:image` and `twitter:image` values with absolute production HTTPS image URLs, and add `og:url`.
3. Complete the browser and device checks above.

External services cannot fetch localhost sharing previews.

## Repository status

GitHub `main` now contains the showcase version, following the approved replacement of its earlier history. The previous remote tip is preserved locally on `backup/main-before-showcase-20260913`; that backup branch has not been uploaded. The local showcase work is on `chore/showcase-housekeeping`.

The earlier TOTO and glassmorphism changes are not part of current `main`. Consult the backup if those features are needed later. Push subsequent updates normally when they descend from current remote `main`; another force push is not required for this README update.
