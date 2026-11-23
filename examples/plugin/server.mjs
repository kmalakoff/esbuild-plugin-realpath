import esbuild from 'esbuild';
import realpath from '../../dist/esm/index.js';

esbuild.build({
  entryPoints: ['client.tsx'],
  bundle: true,
  outfile: 'public/bundle.js',
  plugins: [realpath()],
});
