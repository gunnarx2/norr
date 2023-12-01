import { useEffect } from 'react';

import { isSSR } from '@norr/utilities';

export type UsePreventScrollReturn = void;

export type UsePreventScrollParameters = {
  preventScroll: boolean;
};

export const usePreventScroll = (
  preventScroll: UsePreventScrollParameters['preventScroll']
): UsePreventScrollReturn => {
  useEffect(() => {
    if (isSSR() || !preventScroll) return;

    const getElement = document.documentElement;
    const getCurrentOverflow = getElement.style.overflow;

    getElement.style.setProperty('overflow', 'hidden');
    return () => getElement.style.setProperty('overflow', getCurrentOverflow);
  }, [preventScroll]);
};
