import { RefObject, useCallback, useEffect, useRef } from 'react';

import { isSSR } from '@norr/utilities';
import { FocusableElement, tabbable } from 'tabbable';

import { useEventListener } from '../useEventListener/useEventListener';

export type UseTrapFocusReturn<T> = RefObject<T>;

export type UseTrapFocusProps = {
  isDisabled?: boolean;
  disableReturnFocus?: boolean;
};

export const useTrapFocus = <T extends HTMLElement = HTMLElement>({
  isDisabled,
  disableReturnFocus,
}: UseTrapFocusProps = {}): UseTrapFocusReturn<T> => {
  const trapFocusRef = useRef<T>(null);

  const previouslyFocusedElement = useRef<HTMLElement | null>(
    !isSSR() ? (document?.activeElement as HTMLElement) : null
  );

  useEffect(() => {
    const getPreviouslyFocusedElement = previouslyFocusedElement.current;
    return () => {
      if (disableReturnFocus) return;
      if (getPreviouslyFocusedElement) getPreviouslyFocusedElement.focus();
    };
  }, [disableReturnFocus]);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isDisabled) return;

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
      }
    },
    [isDisabled]
  );

  useEventListener({
    type: 'keydown',
    listener: handleKeydown,
  });

  return trapFocusRef;
};
