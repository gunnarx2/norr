import { useRef } from 'react';

import { fireEvent, render, renderHook } from '@testing-library/react';

import { useEventListener } from './useEventListener';

describe('useEventListener()', () => {
  test('Instance of function', () => {
    expect(useEventListener).toBeInstanceOf(Function);
  });

  test('Listener is executed when correct type is triggered', () => {
    const listener = jest.fn();
    const { result } = renderHook(() => useRef(null));
    const { getByText } = render(<div ref={result.current}>Lorem ipsum</div>);

    renderHook(() =>
      useEventListener({
        type: 'click',
        listener,
        target: result.current,
      })
    );

    fireEvent.click(getByText('Lorem ipsum'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  test('Listener is not executed when incorrect type is triggered', () => {
    const listener = jest.fn();
    const { result } = renderHook(() => useRef(null));
    const { getByText } = render(<div ref={result.current}>Lorem ipsum</div>);

    renderHook(() =>
      useEventListener({
        type: 'resize',
        listener,
        target: result.current,
      })
    );

    fireEvent.click(getByText('Lorem ipsum'));
    expect(listener).toHaveBeenCalledTimes(0);
  });

  test('Listener is not executed when incorrect target is triggered', () => {
    const listener = jest.fn();

    const { result: result1 } = renderHook(() => useRef(null));
    render(<div ref={result1.current}>Lorem ipsum 1</div>);

    const { result: result2 } = renderHook(() => useRef(null));
    const { getByText } = render(
      <div ref={result2.current}>Lorem ipsum 2</div>
    );

    renderHook(() =>
      useEventListener({
        type: 'scroll',
        listener,
        target: result1.current,
      })
    );

    fireEvent.scroll(getByText('Lorem ipsum 2'));
    expect(listener).toHaveBeenCalledTimes(0);
  });

  test('Does not add event listener if target is null', () => {
    const listener = jest.fn();
    const spyAddEventListener = jest.spyOn(global, 'addEventListener');

    renderHook(() =>
      useEventListener({
        type: 'mouseleave',
        listener,
        target: { current: null },
      })
    );

    expect(spyAddEventListener).not.toHaveBeenCalledWith(
      'mouseleave',
      expect.any(Function)
    );
  });

  test('Falls back to window if target is undefined', () => {
    const listener = jest.fn();
    const spyAddEventListener = jest.spyOn(global, 'addEventListener');

    renderHook(() =>
      useEventListener({
        type: 'resize',
        listener,
      })
    );
    expect(spyAddEventListener).toHaveBeenCalled();
  });

  test('Options are passed to event listener', () => {
    const listener = jest.fn();
    const spyAddEventListener = jest.spyOn(global, 'addEventListener');
    const options = {
      capture: true,
      passive: true,
      once: true,
    };

    renderHook(() =>
      useEventListener({
        type: 'mouseenter',
        listener,
        options,
      })
    );

    expect(spyAddEventListener).toHaveBeenCalledWith(
      'mouseenter',
      expect.any(Function),
      expect.objectContaining(options)
    );
  });
});
