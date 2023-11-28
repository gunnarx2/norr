import { AriaRole, useMemo, useState } from 'react';

import {
  UseTrapFocusProps,
  UseTrapFocusReturn,
  useClickOutside,
  useEventListener,
  usePreventScroll,
  useTrapFocus,
} from '@norr/hooks';

export type UseModalReturn<T> = {
  modalProps: {
    ref: UseTrapFocusReturn<T>;
    role: AriaRole;
  };
  modalTriggerProps: {
    type: 'button';
    onClick: () => void;
  };
  modalCloseProps: {
    type: 'button';
    onClick: () => void;
  };
  modalIsOpen: boolean;
};

export type UseModalProps = {
  disableClickOutside?: boolean;
  disableEscapeKey?: boolean;
  disablePreventScroll?: boolean;
  disableTrapFocus?: boolean;
  disableReturnFocus?: UseTrapFocusProps['disableReturnFocus'];
};

export const useModal = <T extends HTMLElement = HTMLElement>({
  disableClickOutside,
  disableEscapeKey,
  disablePreventScroll,
  disableTrapFocus,
  disableReturnFocus,
}: UseModalProps = {}): UseModalReturn<T> => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const trapFocusRef = useTrapFocus<T>({
    isDisabled: disableTrapFocus,
    disableReturnFocus,
  });

  const shouldPreventScroll = disablePreventScroll ? false : modalIsOpen;
  usePreventScroll(shouldPreventScroll);

  useClickOutside(trapFocusRef, () => {
    if (disableClickOutside || !modalIsOpen) return;
    setModalIsOpen(false);
  });

  useEventListener({
    type: 'keydown',
    listener: ({ key }) => {
      if (disableEscapeKey || key !== 'Escape' || !modalIsOpen) return;
      setModalIsOpen(false);
    },
  });

  const modalProps = useMemo(
    () => ({
      ref: trapFocusRef,
      role: 'dialog',
    }),
    [trapFocusRef]
  );

  const modalTriggerProps = useMemo(
    () => ({
      type: 'button' as const,
      onClick: () => {
        setModalIsOpen((previousModalIsOpen) => !previousModalIsOpen);
      },
    }),
    []
  );

  const modalCloseProps = useMemo(
    () => ({
      type: 'button' as const,
      onClick: () => setModalIsOpen(false),
    }),
    []
  );

  return { modalProps, modalTriggerProps, modalCloseProps, modalIsOpen };
};
