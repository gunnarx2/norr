import { renderHook } from '@testing-library/react';

import { useInterval } from './useInterval';

jest.useFakeTimers();

describe('useInterval()', () => {
  it('Instance of function', () => {
    expect(useInterval).toBeInstanceOf(Function);
  });

  it('Make sure callback is triggered correctly based on delay', () => {
    const callback = jest.fn();

    renderHook(() => {
      useInterval(callback, 1000);
    });

    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(5);
  });
});
