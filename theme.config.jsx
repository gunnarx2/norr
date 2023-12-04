import { Logo } from './src/components';

export default {
  primaryHue: 179,
  primarySaturation: 51,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  logo: <Logo />,
  project: {
    link: 'https://github.com/gunnarx2/norr',
  },
  docsRepositoryBase: 'https://github.com/gunnarx2/norr/tree/master/',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - NORR',
    };
  },
  head: () => {
    return (
      <>
        <html lang="en" />
        <meta
          name="description"
          content="Norr is just another monorepo with a bunch of packages"
        />
        <meta property="og:title" content="NORR" />
        <meta
          property="og:description"
          content="Norr is just another monorepo with a bunch of packages"
        />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/favicon-light-mode.png" rel="icon" />
        <link
          href="/favicon-light-mode.png"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon-dark-mode.png"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://norr.vercel.app/" />
        <meta name="apple-mobile-web-app-title" content="NORR" />
      </>
    );
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
  },
};
