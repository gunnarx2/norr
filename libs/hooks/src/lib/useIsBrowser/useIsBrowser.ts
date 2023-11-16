import { useEffect, useState } from 'react';

export const useIsBrowser = (): boolean => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser;
};
