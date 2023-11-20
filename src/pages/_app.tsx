import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import { ProgressBar } from '../components';
import { isBuild } from '../utilities';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
      {isBuild() && <Analytics />}
    </>
  );
};

export default App;
