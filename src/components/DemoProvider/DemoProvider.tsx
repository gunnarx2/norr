import { ReactNode } from 'react';

import { inline } from './DemoProvider.styles';

export type DemoProviderProps = {
  children: ReactNode;
};

export const DemoProvider = ({ children }: DemoProviderProps) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{inline}</style>
    </>
  );
};
