import { useRef } from 'react';

import { fireEvent, render, renderHook } from '@testing-library/react';

import { useEventListener } from './useEventListener';

describe('useEventListener()', () => {
  it('Instance of function', () => {
    expect(useEventListener).toBeInstanceOf(Function);
  });

  it('Listener is executed when correct type is triggered', () => {
    const listener = jest.fn();
    const { result } = renderHook(() => useRef(null));
    const { getByText } = render(<div ref={result.current}>Lorem ipsum</div>);

    renderHook(() => useEventListener('click', listener, result.current));

    fireEvent.click(getByText('Lorem ipsum'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('Listener is not executed when incorrect type is triggered', () => {
    const listener = jest.fn();
    const { result } = renderHook(() => useRef(null));
    const { getByText } = render(<div ref={result.current}>Lorem ipsum</div>);

    renderHook(() => useEventListener('resize', listener, result.current));

    fireEvent.click(getByText('Lorem ipsum'));
    expect(listener).toHaveBeenCalledTimes(0);
  });

  it('Listener is not executed when incorrect element is triggered', () => {
    const listener = jest.fn();

    const { result: result1 } = renderHook(() => useRef(null));
    render(<div ref={result1.current}>Lorem ipsum 1</div>);

    const { result: result2 } = renderHook(() => useRef(null));
    const { getByText } = render(
      <div ref={result2.current}>Lorem ipsum 2</div>
    );

    renderHook(() => useEventListener('scroll', listener, result1.current));

    fireEvent.scroll(getByText('Lorem ipsum 2'));
    expect(listener).toHaveBeenCalledTimes(0);
  });

  it('Does not add event listener if element is null', () => {
    const listener = jest.fn();
    const spyAddEventListener = jest.spyOn(global, 'addEventListener');

    renderHook(() =>
      useEventListener('mouseleave', listener, { current: null })
    );

    expect(spyAddEventListener).not.toHaveBeenCalledWith(
      'mouseleave',
      expect.any(Function)
    );
  });

  it('Falls back to window if element is undefined', () => {
    const listener = jest.fn();
    const spyAddEventListener = jest.spyOn(global, 'addEventListener');

    renderHook(() => useEventListener('resize', listener));
    expect(spyAddEventListener).toHaveBeenCalled();
  });

  it('Options are passed to event listener', () => {
    const listener = jest.fn();
    const spyAddEventListener = jest.spyOn(global, 'addEventListener');
    const options = {
      capture: true,
      passive: true,
      once: true,
    };

    renderHook(() =>
      useEventListener('mouseenter', listener, undefined, options)
    );

    expect(spyAddEventListener).toHaveBeenCalledWith(
      'mouseenter',
      expect.any(Function),
      expect.objectContaining(options)
    );
  });
});
