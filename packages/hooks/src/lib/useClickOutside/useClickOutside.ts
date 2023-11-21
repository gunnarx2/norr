import { RefObject } from 'react';

import { useEventListener } from '../useEventListener/useEventListener';

export type UseClickOutsideReturn = void;

export type UseClickOutsideParameters<T> = {
  ref: RefObject<T>;
  callback: (event: MouseEvent) => void;
};

export const useClickOutside = <T extends Element = Element>(
  ref: UseClickOutsideParameters<T>['ref'],
  callback: UseClickOutsideParameters<T>['callback']
): UseClickOutsideReturn => {
  useEventListener({
    type: 'click',
    listener: (event) => {
      const element = ref?.current;

      if (!element || element.contains(event.target as Element)) {
        return;
      }

      callback(event);
    },
  });
};
