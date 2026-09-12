# esbuild-plugin-realpath

A plugin that resolves the real filesystem path for modules in monorepos targeting the browser or Node.js.

## Installation

```sh
npm install esbuild esbuild-plugin-realpath
```

Run this in an esbuild project that has `src/index.js`:

```javascript
const esbuild = require('esbuild');
const realpath = require('esbuild-plugin-realpath');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './public/bundle.js',
  plugins: [realpath()],
});
```

The plugin uses browser resolution for browser builds and Node resolution for Node builds. It resolves each module path once and writes the bundled output to `public/bundle.js` in this example.

## Examples

[code](https://github.com/kmalakoff/esbuild-plugin-realpath/tree/master/examples)

## License

MIT
