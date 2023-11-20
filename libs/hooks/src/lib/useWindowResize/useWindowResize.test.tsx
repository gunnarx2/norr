import { renderHook, fireEvent } from '@testing-library/react';

import { useWindowResize } from './useWindowResize';

describe('useWindowResize()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Instance of function', () => {
    expect(useWindowResize).toBeInstanceOf(Function);
  });

  it('Callback should be called directly and only once', () => {
    const callback = jest.fn();
    renderHook(() => useWindowResize(callback));

    fireEvent(window, new Event('resize'));
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('Set wait value to enable debounce', () => {
    const wait = 250;
    const callback = jest.fn();
    renderHook(() => useWindowResize(callback, wait));

    fireEvent(window, new Event('resize'));
    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(wait - 1);
    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
