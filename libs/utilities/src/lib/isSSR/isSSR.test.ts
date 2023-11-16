import { isSSR } from './isSSR';

describe('isSSR()', () => {
  it('Should return false', () => {
    expect(isSSR()).toBe(true);
  });
});
