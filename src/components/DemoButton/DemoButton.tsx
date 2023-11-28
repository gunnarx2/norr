import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { inline } from './DemoButton.styles';

export type DemoButtonProps = {
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const DemoButton = ({ children, ...rest }: DemoButtonProps) => {
  return (
    <>
      <button type="button" {...rest}>
        {children}
      </button>
      <style jsx>{inline}</style>
    </>
  );
};
