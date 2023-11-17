import { renderHook } from '@testing-library/react';

import { useIsBrowser } from './useIsBrowser';

describe('useIsBrowser()', () => {
  it('Instance of function', () => {
    expect(useIsBrowser).toBeInstanceOf(Function);
  });

  it(`Should tell us that it's runnable with browser features`, () => {
    const { result } = renderHook(() => useIsBrowser());
    expect(result.current).toBe(true);
  });
});
