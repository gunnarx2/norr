import { AriaRole, RefObject, useMemo, useRef, useState } from 'react';

import { useClickOutside, useEventListener } from '@norr/hooks';

export type UseModalReturn<T> = {
  modalProps: {
    ref: RefObject<T>;
    role: AriaRole;
    tabIndex: number;
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
};

export const useModal = <T extends HTMLElement = HTMLElement>({
  disableClickOutside,
  disableEscapeKey,
}: UseModalProps = {}): UseModalReturn<T> => {
  const modalRef = useRef<T>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useClickOutside(modalRef, () => {
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
      ref: modalRef,
      role: 'dialog',
      tabIndex: -1,
    }),
    []
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
