# Lucky 4D with Caishen

Build By Rat · LAB / 001. A static random four-digit number generator and editorial journal of its AI-assisted development with Codex.

## Structure

```text
index.html                    Page entry point
favicon.ico                   Transparent browser icon
assets/
  css/styles.css              Layout, branding, and animations
  js/app.js                   Generation, copying, sharing, and cleanup
  images/                     Active transparent mascot and sharing preview
  icons/                      Browser and Apple touch icons
  vendor/fontawesome/         Local icon fonts, styles, and license
docs/design/                  Archived artwork experiments and notes
README.md                     Setup and release notes
```

## Local development

From the project root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit http://localhost:8000. Stop with Ctrl+C. No package installation or build step is required. Use localhost rather than opening the file directly to test clipboard support.

Page assets are local. External sharing requires an internet connection. Native sharing depends on browser support and a secure context; platform buttons appear after generation when native sharing is unavailable or fails.

Edit markup in `index.html`, styles in `assets/css/styles.css`, and behavior in `assets/js/app.js`. Update the CSS or JavaScript `?v=` hash in `index.html` when changing an asset to avoid stale browser copies.

## Layout and animation

Desktop uses a 55/45 editorial/generator split. At 900px and below, the generator appears first. The page has one shared scroll area; the generator is sticky only on wide, tall screens.

Three CSS-clipped mascot regions reuse the same transparent PNG. These are presentation layers, not independently illustrated assets. Movement is restrained to reduce seams, and an original-image fallback is available without clipping support. Reduced motion disables animation. Celebrations are confined to the generator and tracked until cleanup completes.

## Validation

```sh
node --check assets/js/app.js
git diff --check
```

Check mobile and desktop, keyboard focus, zoom, screen-reader result announcements, repeated generation, leading zeros, clipboard success/failure, canceled/failed sharing, reduced motion, and mascot seams. Source checks do not replace browser validation.

## Publishing

Deploy `index.html`, `favicon.ico`, and `assets/` together, preserving relative paths. `docs/` is not needed at runtime.

Before a public release:

- Supply the project collection URL and replace the inactive “All Experiments (coming soon)” label with an anchor.
- Use absolute production HTTPS URLs for `og:image` and `twitter:image`, and add `og:url`.
- Verify real-device copying/sharing and the full mobile and accessibility experience.

The favicon uses the original transparent mascot. Home-screen artwork has a cream background. Social artwork is `assets/images/social-preview.jpg` (1200×630). Unused generated artwork is preserved in [the design archive](docs/design/README.md).

Font Awesome 6.6.0 is vendored locally; its license is in `assets/vendor/fontawesome/LICENSE.txt`. Decorative icons are hidden from assistive technology.

## AI-assisted development

The developer set direction, reviewed screenshots, and chose revisions. Codex assisted with code review, structure, implementation, accessibility improvements, and branding experiments. The journal documents this collaboration and remaining testing limits.

## Repository history

This showcase version was developed from the initial local checkout. Remote `main` also contains later TOTO and styling changes. Keep those histories intact; review and reconcile feature differences before merging the showcase branch into `main`.
