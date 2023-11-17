import { isSSR } from './isSSR';

describe('isSSR()', () => {
  it('Instance of function', () => {
    expect(isSSR).toBeInstanceOf(Function);
  });

  it('Should return true during unit test', () => {
    expect(isSSR()).toBe(true);
  });
});
