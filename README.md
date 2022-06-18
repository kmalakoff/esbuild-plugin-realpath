## esbuild-plugin-realpath

A plugin to resolve the fs.realpath for modules in monorepos targeting the browser and node.

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

## Examples

[code](https://github.com/kmalakoff/esbuild-plugin-realpath/tree/master/examples)
