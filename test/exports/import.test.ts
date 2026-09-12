import assert from 'assert';
import realpath from 'esbuild-plugin-realpath';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof realpath, 'function');
  });
});
