import { renderHook, fireEvent } from '@testing-library/react';

import { useWindowResize } from './useWindowResize';

describe('useWindowResize()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Instance of function', () => {
    expect(useWindowResize).toBeInstanceOf(Function);
  });

  test('Callback should be called directly and only once', () => {
    const callback = jest.fn();
    renderHook(() => useWindowResize(callback));

    fireEvent(window, new Event('resize'));
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Enable debounce by passing it as argument', () => {
    const debounce = 250;
    const callback = jest.fn();
    renderHook(() => useWindowResize(callback, debounce));

    fireEvent(window, new Event('resize'));
    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(debounce - 1);
    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
