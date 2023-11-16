import { RefObject } from 'react';

import { useEventListener } from '../useEventListener/useEventListener';

export function useClickOutside<T extends Element = Element>(
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void
): void {
  useEventListener('click', (event) => {
    const element = ref?.current;

    if (!element || element.contains(event.target as Element)) {
      return;
    }

    handler(event);
  });
}
