const ibex = require('../src/inbex');

describe('ibexes', () => {
  it('loves ibexes', () => {
    expect(ibex()).toBeLessThan(3);
  });
});
