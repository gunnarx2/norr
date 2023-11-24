import {
  Children,
  Fragment,
  ReactNode,
  ReactPortal,
  RefObject,
  useMemo,
} from 'react';

import { useIsBrowser, useTrapFocus } from '@norr/hooks';
import { createPortal as ReactDOMCreatePortal } from 'react-dom';

import { isReactElement } from '../../utilities/isReactElement';
import { isReactFragment } from '../../utilities/isReactFragment';
import { passPropsToChildren } from '../../utilities/passPropsToChildren';

export type UsePortalReturn = {
  portalProps: {
    children?: ReactPortal;
  };
};

export type UsePortalProps = {
  children: ReactNode;
  container?: RefObject<HTMLElement>;
  trapFocus?: boolean;
};

export const usePortal = ({
  children,
  container,
  trapFocus,
}: UsePortalProps): UsePortalReturn => {
  const isBrowser = useIsBrowser();
  const trapFocusRef = useTrapFocus({
    disabled: !trapFocus,
  });

  const portalProps = useMemo(() => {
    if (!isBrowser) return {};

    const childrenIsFragment = isReactFragment(children);
    if (childrenIsFragment && trapFocus) {
      console.warn(
        `Portal children can't start with a fragment for trap focus to work.`
      );
      return {};
    }

    const childrenIsElement = isReactElement(children);
    if (!childrenIsElement && trapFocus) {
      console.warn(
        `Portal children needs to be an element for trap focus to work.`
      );
      return {};
    }

    const childenIsTooMany = Children.count(children) > 1;
    if (childenIsTooMany && trapFocus) {
      console.warn(
        `Portal children may only have one child element for trap focus to work.`
      );
      return {};
    }

    const containerElement = container?.current;
    const getChildren = trapFocus
      ? passPropsToChildren(children, {
          ref: trapFocusRef,
        })
      : children;

    return {
      children: ReactDOMCreatePortal(
        <Fragment>{getChildren}</Fragment>,
        containerElement || document.body
      ),
    };
  }, [children, container, isBrowser, trapFocusRef, trapFocus]);

  return { portalProps };
};
