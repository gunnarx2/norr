import { fireEvent, act, renderHook } from '@testing-library/react';

import { useWindowSize } from './useWindowSize';

describe('useWindowSize()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Instance of function', () => {
    expect(useWindowSize).toBeInstanceOf(Function);
  });

  test('Should return width and height on resize', () => {
    const { result } = renderHook(() => useWindowSize());

    const newWidth = 1337;
    act(() => {
      window.innerWidth = newWidth;
      fireEvent(window, new Event('resize'));
    });
    expect(result.current.width).toBe(newWidth);

    const newHeight = 666;
    act(() => {
      window.innerHeight = newHeight;
      fireEvent(window, new Event('resize'));
    });
    expect(result.current.height).toBe(newHeight);
  });

  test('Enable debounce by passing it as argument', () => {
    const debounce = 250;
    const { result } = renderHook(() => useWindowSize({ debounce }));

    const newWidth = 1234;
    act(() => {
      window.innerWidth = newWidth;
      fireEvent(window, new Event('resize'));
    });
    expect(result.current.width).not.toBe(newWidth);

    act(() => jest.advanceTimersByTime(debounce - 1));
    expect(result.current.width).not.toBe(newWidth);

    act(() => jest.advanceTimersByTime(1));
    expect(result.current.width).toBe(newWidth);

    const newHeight = 420;
    act(() => {
      window.innerHeight = newHeight;
      fireEvent(window, new Event('resize'));
    });
    expect(result.current.height).not.toBe(newHeight);

    act(() => jest.advanceTimersByTime(debounce - 1));
    expect(result.current.height).not.toBe(newHeight);

    act(() => jest.advanceTimersByTime(1));
    expect(result.current.height).toBe(newHeight);
  });
});
