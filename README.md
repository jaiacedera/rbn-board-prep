# RBN Nursing Board Review

The existing HTML, CSS, and JavaScript site, preserved without source changes.

## Run locally

From this directory, run:

```sh
npm.cmd run dev -- --host 127.0.0.1
```

Open the Local URL printed in the terminal (normally http://127.0.0.1:5173).
Stop the server with Ctrl+C. Use HTTP rather than opening index.html directly
so the existing service worker can run.

`index.html` is the entry point. The original `app.js`, `style.css`, `sw.js`,
`manifest.webmanifest`, and `icon.svg` are in `public/` and served unchanged.
Vite was already installed in this workspace; no dependencies were added.
The previous React starter files in `src/` are unused.

Google Fonts requires an internet connection, as in the original site.
Progress is stored in this browser. The tutor and premium access retain their
existing demo behavior.

## Static build (optional)

```sh
npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1
```

The build goes into `dist/`. The classic app.js script is deliberately kept
unbundled to preserve the supplied source.
