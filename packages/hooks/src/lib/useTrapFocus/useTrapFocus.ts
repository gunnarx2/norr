import { RefObject, useCallback, useEffect, useRef } from 'react';

import { FocusableElement, tabbable } from 'tabbable';

import { useEventListener } from '../useEventListener/useEventListener';
import { useIsBrowser } from '../useIsBrowser/useIsBrowser';

export type UseTrapFocusReturn<T> = RefObject<T>;

export type UseTrapFocusProps = {
  disabled?: boolean;
};

export const useTrapFocus = <T extends HTMLElement = HTMLElement>({
  disabled,
}: UseTrapFocusProps = {}): UseTrapFocusReturn<T> => {
  const isBrowser = useIsBrowser();
  const trapFocusRef = useRef<T>(null);

  const previouslyFocusedElement = useRef<HTMLElement>(
    isBrowser ? (document.activeElement as HTMLElement) : null
  );

  useEffect(() => {
    const getPreviouslyFocusedElement = disabled
      ? null
      : previouslyFocusedElement.current;

    return () => {
      if (getPreviouslyFocusedElement) getPreviouslyFocusedElement.focus();
    };
  }, [disabled]);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (disabled) return;

      const { key, shiftKey } = event;
      const trapFocusElement = trapFocusRef.current;
      if (key !== 'Tab' || !trapFocusElement) return;

      const getTabbableElements = tabbable(trapFocusElement);
      if (!getTabbableElements.length) return;

      const firstElement = getTabbableElements[0];
      const lastElement = getTabbableElements[getTabbableElements.length - 1];
      const { activeElement } = document;

      if (!getTabbableElements.includes(activeElement as FocusableElement)) {
        event.preventDefault();
        const getElement = shiftKey ? lastElement : firstElement;
        getElement.focus();
        return;
      }

      if (shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
        return;
      }
    },
    [disabled]
  );

  useEventListener({
    type: 'keydown',
    listener: handleKeydown,
  });

  return trapFocusRef;
};
