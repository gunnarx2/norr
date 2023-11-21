import { isSSR } from './isSSR';

describe('isSSR()', () => {
  test('Instance of function', () => {
    expect(isSSR).toBeInstanceOf(Function);
  });

  test('Should return true during unit test', () => {
    expect(isSSR()).toBe(true);
  });
});
