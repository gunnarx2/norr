import { useEffect, useMemo, useRef } from 'react';

import lodashDebounce from 'lodash.debounce';

import { useEventListener } from '../useEventListener/useEventListener';

export type UseWindowResizeReturn = void;

export type UseWindowResizeParameters = {
  callback: (event: UIEvent) => void;
  debounce?: number;
};

export const useWindowResize = (
  callback: UseWindowResizeParameters['callback'],
  debounce?: UseWindowResizeParameters['debounce']
): UseWindowResizeReturn => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const handleResize = useMemo(() => {
    const shouldUseDebounce = typeof debounce === 'number' && debounce > 0;
    const getCallback = savedCallback.current;

    return shouldUseDebounce
      ? lodashDebounce((event: UIEvent) => getCallback(event), debounce)
      : (event: UIEvent) => getCallback(event);
  }, [debounce]);

  useEventListener({
    type: 'resize',
    listener: handleResize,
  });
};
