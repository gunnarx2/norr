import { useState, useCallback, useEffect } from 'react';

import { useWindowResize } from '../useWindowResize/useWindowResize';

export const useWindowSize = (wait?: number) => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
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
  }, wait);

  useEffect(() => {
    setWindowSize(getWindowSize);
  }, [getWindowSize]);

  return windowSize;
};
