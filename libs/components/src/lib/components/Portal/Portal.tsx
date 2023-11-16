import { ReactNode, RefObject } from 'react';

import { useIsBrowser } from '@norr/hooks';
import { createPortal } from 'react-dom';

import * as classNames from './Portal.classNames';

export type PortalProps = {
  children: ReactNode;
  container?: RefObject<HTMLElement | null>;
};

export const Portal = ({ children, container }: PortalProps) => {
  const containerElement = container?.current;
  const isBrowser = useIsBrowser();

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <div className={classNames.root}>{children}</div>,
    containerElement || document.body
  );
};
