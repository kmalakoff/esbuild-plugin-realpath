const fs = require('fs').promises;
const nodeResolve = require('util').promisify(require('resolve'));
const browserResolve = require('util').promisify(require('browser-resolve'));
const resolveOnce = require('resolve-once');

module.exports = (options = {}) => {
  return {
    name: 'realpath',
    setup(build) {
      const cache = {};
      options = {
        extensions: build.initialOptions.resolveExtensions,
        ...options,
      };
      const resolve = build.initialOptions.platform === 'node' ? nodeResolve : browserResolve;
      build.onResolve({ filter: /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/ }, async (args) => {
        if (!cache[args.path]) {
          cache[args.path] = resolveOnce(async () => {
            try {
              const found = await resolve(args.path, options);
              if (found) return { path: await fs.realpath(found) };
            } catch {
              return null;
            }
          });
        }
        return await cache[args.path]();
      });
    },
  };
};
