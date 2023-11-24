import { ReactNode } from 'react';

export const isReactElement = (children: ReactNode) => {
  const getChildren = children as any; // 🤮

  const isValid = typeof getChildren === 'object' && getChildren !== null;
  if (!isValid) return false;

  const isElementType = getChildren.$$typeof === Symbol.for('react.element');
  if (isElementType) return true;

  return false;
};
