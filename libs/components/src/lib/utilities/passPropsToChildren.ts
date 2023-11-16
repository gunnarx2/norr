import { Children, isValidElement, cloneElement, ReactNode } from 'react';

export const passPropsToChildren = (
  children: ReactNode,
  props: Record<any, any>
) => {
  return Children.map(children, (child) => {
    return isValidElement(child) ? cloneElement(child, { ...props }) : child;
  });
};
