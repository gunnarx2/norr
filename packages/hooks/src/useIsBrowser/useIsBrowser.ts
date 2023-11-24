import { useEffect, useState } from 'react';

export type UseIsBrowserReturn = boolean;

export const useIsBrowser = (): UseIsBrowserReturn => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser;
};
