import type { AppProps } from 'next/app';

import { ProgressBar } from '../components';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
