import { Fragment, ReactNode, ReactPortal, RefObject, useMemo } from 'react';

import { useIsBrowser } from '@norr/hooks';
import { createPortal as ReactDOMCreatePortal } from 'react-dom';

export type UsePortalReturn = {
  portalProps: {
    children?: ReactPortal;
  };
};

export type UsePortalProps = {
  children: ReactNode;
  container?: RefObject<HTMLElement>;
};

export const usePortal = ({
  children,
  container,
}: UsePortalProps): UsePortalReturn => {
  const isBrowser = useIsBrowser();

  const portalProps = useMemo(() => {
    if (!isBrowser) return {};

    return {
      children: ReactDOMCreatePortal(
        <Fragment>{children}</Fragment>,
        container?.current || document.body
      ),
    };
  }, [children, container, isBrowser]);

  return { portalProps };
};
