import browserResolve_ from 'browser-resolve';
import type { Plugin, PluginBuild } from 'esbuild';
import { promises as fs } from 'fs';
import * as resolve from 'resolve';
import resolveOnce from 'resolve-once';
import { promisify } from 'util';

const nodeResolve = promisify(resolve);
const browserResolve = promisify(browserResolve_);

export default (optionsIn = {}): Plugin => {
  return {
    name: 'realpath',
    setup(build: PluginBuild): undefined {
      const cache = {};
      const options = {
        extensions: build.initialOptions.resolveExtensions,
        ...optionsIn,
      };
      const resolve = build.initialOptions.platform === 'node' ? nodeResolve : browserResolve;
      build.onResolve({ filter: /^[^./]|^\.[^./]|^\.\.[^/]/ }, async (args) => {
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
