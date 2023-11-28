import { ReactNode } from 'react';

import { UseTrapFocusProps, useTrapFocus } from '@norr/components';

type TrapFocusProps = {
  children: ReactNode;
  className?: string;
} & UseTrapFocusProps;

export const TrapFocus = ({
  children,
  className,
  disableReturnFocus,
}: TrapFocusProps) => {
  const { trapFocusProps } = useTrapFocus<HTMLDivElement>({
    disableReturnFocus,
  });

  return (
    <div className={className} {...trapFocusProps}>
      {children}
    </div>
  );
};
