import { useEffect, useRef } from 'react';

type IntervalCallback = () => void;

export const useInterval = (
  callback: IntervalCallback,
  delay: number
): void => {
  const savedCallback = useRef<IntervalCallback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (
      typeof delay !== 'number' ||
      typeof savedCallback.current !== 'function'
    ) {
      return;
    }

    const tick = () => savedCallback.current?.();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
