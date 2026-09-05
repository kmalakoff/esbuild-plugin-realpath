const assert = require('assert');
const realpath = require('esbuild-plugin-realpath');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof realpath, 'function');
  });
});
