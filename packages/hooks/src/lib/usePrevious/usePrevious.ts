import { useEffect, useRef } from 'react';

export type UsePreviousReturn<T> = T;

export type UsePreviousParameters<T> = {
  value: T;
};

export const usePrevious = <T>(
  value: UsePreviousParameters<T>['value']
): UsePreviousReturn<T> => {
  const previousValue = useRef<T | undefined>();

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current as T;
};
