import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import { ProgressBar } from '../components';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
