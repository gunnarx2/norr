import { useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  template: '<div class="progress-bar" role="bar"></div>',
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

  return (
    <style jsx global>{`
      .progress-bar {
        pointer-events: none;
        background-color: #319795;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    `}</style>
  );
};
