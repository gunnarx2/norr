import { useIsBrowser } from './useIsBrowser';

describe('useIsBrowser()', () => {
  it('Instance of function', () => {
    expect(useIsBrowser).toBeInstanceOf(Function);
  });
});
