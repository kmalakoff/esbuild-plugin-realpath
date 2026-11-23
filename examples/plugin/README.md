# Realpath plugin example

Bundles a React page with esbuild, resolving each module's real path with the realpath plugin. The bundle is written to `public/bundle.js`. The example imports the plugin from the repository's built output.

```sh
# in the repository root
npm install
npm run build

# in this directory
npm install
npm start
```
