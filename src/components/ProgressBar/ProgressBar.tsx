import { useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

import { progressBar } from './ProgressBar.styles';

NProgress.configure({
  template: `<div class="${progressBar.className}" role="bar"></div>`,
  showSpinner: false,
  easing: 'ease-in-out',
  speed: 500,
});

const routeChangeStart = () => {
  NProgress.set(0);
  NProgress.start();
};

const routeChangeEnd = () => {
  NProgress.done(true);
};

export const ProgressBar = () => {
  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, []);

  return <>{progressBar.styles}</>;
};
