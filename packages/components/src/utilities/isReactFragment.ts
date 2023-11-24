import { ReactNode } from 'react';

export const isReactFragment = (children: ReactNode) => {
  const getChildren = children as any; // 🤮

  const isValid = typeof getChildren === 'object' && getChildren !== null;
  if (!isValid) return false;

  const isElementType = getChildren.$$typeof === Symbol.for('react.element');
  if (!isElementType) return false;

  const isFragmentType = getChildren.type === Symbol.for('react.fragment');
  if (isFragmentType) return true;

  return false;
};
