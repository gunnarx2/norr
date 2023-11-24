import { MutableRefObject, useRef } from 'react';

import { fireEvent, render, renderHook, screen } from '@testing-library/react';

import { useClickOutside } from './useClickOutside';

describe('useClickOutside()', () => {
  const Content = ({
    result,
  }: {
    result?: { current: MutableRefObject<null> };
  } = {}) => (
    <>
      <div ref={result?.current}>
        <p>Text inside</p>
      </div>
      <div>
        <p>Text outside</p>
      </div>
    </>
  );

  test('Instance of function', () => {
    expect(useClickOutside).toBeInstanceOf(Function);
  });

  test('Trigger callback when click outside element', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useRef(null));

    render(<Content result={result} />);
    renderHook(() => useClickOutside(result.current, callback));

    fireEvent.click(screen.getByText('Text outside'));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test(`Don't trigger callback when click inside element`, () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useRef(null));

    render(<Content result={result} />);
    renderHook(() => useClickOutside(result.current, callback));

    fireEvent.click(screen.getByText('Text inside'));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  test(`Don't trigger callback if element doesn't exist`, () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useRef(null));

    render(<Content />);
    renderHook(() => useClickOutside(result.current, callback));

    fireEvent.click(screen.getByText('Text inside'));
    expect(callback).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByText('Text outside'));
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
