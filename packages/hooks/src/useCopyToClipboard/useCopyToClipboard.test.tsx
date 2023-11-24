import { act, renderHook } from '@testing-library/react';

import { useCopyToClipboard } from './useCopyToClipboard';

describe('useCopyToClipboard()', () => {
  const valueToCopy = 'Lorem ipsum';
  const originalClipboard = { ...global.navigator.clipboard };

  beforeEach(() => {
    const mockClipboard = { writeText: jest.fn() };
    // @ts-expect-error Mock clipboard
    global.navigator.clipboard = mockClipboard;
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.resetAllMocks();
    // @ts-expect-error Mock clipboard
    global.navigator.clipboard = originalClipboard;
    jest.useRealTimers();
  });

  test('Instance of function', () => {
    expect(useCopyToClipboard).toBeInstanceOf(Function);
  });

  test('Should copy to the clipboard and to the "copiedValue" state', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copyValue(valueToCopy);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(valueToCopy);
    expect(result.current.copiedValue).toBe(valueToCopy);
  });

  test('Function "copyValue()" should return true if successful', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const response = await result.current.copyValue(valueToCopy);
      expect(response).toBe(true);
    });
  });

  test('State "isCopied" should go back to false', async () => {
    const defaultDuration = 2500;
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copyValue(valueToCopy);
    });

    expect(result.current.isCopied).toBe(true);

    act(() => jest.advanceTimersByTime(defaultDuration - 1));
    expect(result.current.isCopied).toBe(true);

    act(() => jest.advanceTimersByTime(1));
    expect(result.current.isCopied).toBe(false);
  });

  test('State "isCopied" should go back to false with given duration', async () => {
    const customDuration = 7500;
    const { result } = renderHook(() =>
      useCopyToClipboard({
        duration: customDuration,
      })
    );

    await act(async () => {
      await result.current.copyValue(valueToCopy);
    });

    expect(result.current.isCopied).toBe(true);

    act(() => jest.advanceTimersByTime(customDuration - 1));
    expect(result.current.isCopied).toBe(true);

    act(() => jest.advanceTimersByTime(1));
    expect(result.current.isCopied).toBe(false);
  });
});
