import {
  Fragment,
  HTMLAttributes,
  ReactPortal,
  RefObject,
  useMemo,
} from 'react';

import { useIsBrowser } from '@norr/hooks';
import { createPortal as ReactDOMCreatePortal } from 'react-dom';

export type UsePortalReturn = {
  portalProps: {
    children?: ReactPortal;
  };
};

export type UsePortalProps = {
  container?: RefObject<HTMLElement | null>;
} & HTMLAttributes<HTMLElement>;

export const usePortal = (props: UsePortalProps): UsePortalReturn => {
  const isBrowser = useIsBrowser();

  const portalProps = useMemo(() => {
    if (!isBrowser) return {};

    const { container, ...restPortalProps } = props;
    const containerElement = container?.current;

    return {
      children: ReactDOMCreatePortal(
        <Fragment {...restPortalProps} />,
        containerElement || document.body
      ),
    };
  }, [isBrowser, props]);

  return { portalProps };
};
