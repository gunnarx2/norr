import { renderHook } from '@testing-library/react';

import { usePrevious } from './usePrevious';

describe('usePrevious()', () => {
  const setupUsePrevious = () =>
    renderHook(({ count }) => usePrevious(count), {
      initialProps: { count: 0 },
    });

  test('Instance of function', () => {
    expect(usePrevious).toBeInstanceOf(Function);
  });

  test('Should return undefined on initial render', () => {
    const { result } = setupUsePrevious();
    expect(result.current).toBeUndefined();
  });

  test('Should always return previous count after each update', () => {
    const { result, rerender } = setupUsePrevious();

    rerender({ count: 1 });
    expect(result.current).toBe(0);

    rerender({ count: 2 });
    expect(result.current).toBe(1);

    rerender({ count: 3 });
    expect(result.current).toBe(2);
  });
});
