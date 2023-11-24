import { RefObject } from 'react';

import { useEventListener } from '../useEventListener/useEventListener';

export type UseClickOutsideReturn = void;

export type UseClickOutsideParameters<T> = {
  target: RefObject<T>;
  callback: (event: MouseEvent) => void;
};

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  target: UseClickOutsideParameters<T>['target'],
  callback: UseClickOutsideParameters<T>['callback']
): UseClickOutsideReturn => {
  useEventListener({
    type: 'click',
    listener: (event) => {
      const getTarget = target?.current;

      if (!getTarget || getTarget.contains(event.target as HTMLElement)) {
        return;
      }

      callback(event);
    },
  });
};
