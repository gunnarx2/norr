import { RefObject, useCallback, useEffect, useMemo, useRef } from 'react';

import { useEventListener } from '@norr/hooks';
import { isSSR } from '@norr/utilities';
import { FocusableElement, tabbable } from 'tabbable';

export type UseTrapFocusReturn<T> = {
  trapFocusProps: {
    ref: RefObject<T>;
  };
};

export type UseTrapFocusProps = {
  disableReturnFocus?: boolean;
};

export const useTrapFocus = <T extends HTMLElement = HTMLElement>({
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

  const handleKeydown = useCallback((event: KeyboardEvent) => {
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
  }, []);

  useEventListener({
    type: 'keydown',
    listener: handleKeydown,
  });

  const trapFocusProps = useMemo(
    () => ({
      ref: trapFocusRef,
    }),
    []
  );

  return { trapFocusProps };
};
