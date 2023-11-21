import { renderHook } from '@testing-library/react';

import { useIsBrowser } from './useIsBrowser';

describe('useIsBrowser()', () => {
  test('Instance of function', () => {
    expect(useIsBrowser).toBeInstanceOf(Function);
  });

  test(`Should tell us that it's runnable with browser features`, () => {
    const { result } = renderHook(() => useIsBrowser());
    expect(result.current).toBe(true);
  });
});
