import { useEffect, useRef } from 'react';

export type UseIntervalCallbackReturn = void;

export type UseIntervalCallbackParameters = {
  callback: () => void;
  delay: number;
};

export const useInterval = (
  callback: UseIntervalCallbackParameters['callback'],
  delay: number
): UseIntervalCallbackReturn => {
  const savedCallback = useRef<UseIntervalCallbackParameters['callback']>();

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
