import { useEffect, useMemo, useRef } from 'react';

import debounce from 'lodash.debounce';

import { useEventListener } from '../useEventListener/useEventListener';

export const useWindowResize = (
  callback: (event: UIEvent) => void,
  wait?: number
): void => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const handleResize = useMemo(() => {
    const shouldUseDebounce = typeof wait === 'number' && wait > 0;
    const getCallback = savedCallback.current;

    return shouldUseDebounce
      ? debounce((event: UIEvent) => getCallback(event), wait)
      : (event: UIEvent) => getCallback(event);
  }, [wait]);

  useEventListener('resize', handleResize);
};
