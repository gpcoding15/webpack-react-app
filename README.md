# webpack-react-app

A small React app configured from scratch with webpack, without Create React App or Vite. I built it to learn how webpack works: what a bundler does, how loaders and plugins fit in, and what the tooling behind a React project looks like when you set it up by hand.

The app itself is intentionally tiny: a heading and a button that counts clicks.

## Getting started

Requires Node.js and npm.

```bash
git clone https://github.com/gpcoding15/webpack-react-app.git
cd webpack-react-app
npm install
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts webpack-dev-server in development mode and opens the app at `http://localhost:3000`. |
| `npm run build` | Creates a production bundle in `build/`. |

## Project structure

```
src/
  index.html    HTML template used by html-webpack-plugin
  index.js      Entry point: mounts the React app
  App.js        The App component (click counter)
  styles.css    Global styles
  utils.js      Small helper module from the first bundling tests
webpack.config.js
```

## How the webpack setup works

Everything lives in `webpack.config.js`.

- **Entry and output:** webpack starts at `src/index.js`, follows every import, and writes a single bundle to `build/main.js`.
- **JavaScript and JSX:** `babel-loader` runs `.js` files through Babel with `@babel/preset-react`, using the automatic JSX runtime so components don't need to import React. `node_modules` is excluded.
- **CSS:** `css-loader` lets JavaScript import `.css` files, and `style-loader` injects those styles into the page at runtime.
- **HTML:** `html-webpack-plugin` takes `src/index.html` as a template and generates `build/index.html` with the bundle's `<script>` tag added automatically.
- **Dev server:** `webpack-dev-server` serves the app on port 3000, opens the browser, reloads on changes, and shows build errors as an overlay in the page.

## What I learned

- webpack only understands JavaScript and JSON on its own; every other file type needs a loader.
- Loaders transform individual files, while plugins hook into the build as a whole.
- Options for a Babel preset go in the same array as the preset name: `["@babel/preset-react", { runtime: "automatic" }]`.
- In recent versions of webpack-dev-server, `overlay` belongs under `devServer.client`, not directly under `devServer`.