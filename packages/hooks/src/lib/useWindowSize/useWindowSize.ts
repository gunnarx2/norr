import { useState, useCallback, useEffect } from 'react';

import { useWindowResize } from '../useWindowResize/useWindowResize';

export type UseWindowSizeReturn = {
  width?: number;
  height?: number;
};

export type UseWindowSizeParameters = {
  debounce?: number;
};

export const useWindowSize = ({
  debounce,
}: UseWindowSizeParameters = {}): UseWindowSizeReturn => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeReturn>({
    width: undefined,
    height: undefined,
  });

  const getWindowSize = useCallback(() => {
    const { innerWidth, innerHeight } = window;
    return {
      width: innerWidth,
      height: innerHeight,
    };
  }, []);

  useWindowResize(() => {
    setWindowSize(getWindowSize);
  }, debounce);

  useEffect(() => {
    setWindowSize(getWindowSize);
  }, [getWindowSize]);

  return windowSize;
};
