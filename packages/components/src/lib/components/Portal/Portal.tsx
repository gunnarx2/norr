import {
  HTMLAttributes,
  ReactNode,
  ReactPortal,
  RefObject,
  useMemo,
} from 'react';

import { useIsBrowser } from '@norr/hooks';
import { clsx } from 'clsx';
import { createPortal as ReactDOMCreatePortal } from 'react-dom';

import * as classNames from './Portal.classNames';

export type UsePortalReturn = {
  portalProps: {
    children?: ReactPortal;
  };
};

export type UsePortalProps = {
  children: ReactNode;
  container?: RefObject<HTMLElement | null>;
} & HTMLAttributes<HTMLDivElement>;

export const usePortal = (props: UsePortalProps): UsePortalReturn => {
  const isBrowser = useIsBrowser();

  const portalProps = useMemo(() => {
    if (!isBrowser) return {};

    const { container, className, ...restPortalProps } = props;
    const containerElement = container?.current;

    return {
      children: ReactDOMCreatePortal(
        <div
          {...restPortalProps}
          className={clsx(classNames.root, className)}
        />,
        containerElement || document.body
      ),
    };
  }, [isBrowser, props]);

  return { portalProps };
};
