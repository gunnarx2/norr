# `@norr`

Norr (short for [Norrland](https://en.wikipedia.org/wiki/Norrland)) is just another monorepo with a bunch of packages.

## Scrips

Recommended node version is defined in `.nvmrc`.

- `$ yarn next:dev` - Run [Next.js](https://nextjs.org/) in development mode.
- `$ yarn next:build` - Build [Next.js](https://nextjs.org/) for production usage.
- `$ yarn next:start` - Start a [Next.js](https://nextjs.org/) production server.
- `$ yarn nx:graph` - [Graph](https://nx.dev/nx/dep-graph) dependencies within workspace.
- `$ yarn nx:reset` - Clear all the cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon.
- `$ yarn nx:build:components` - Build [@norr/components](https://github.com/gunnarx2/norr/tree/master/packages/components/).
- `$ yarn nx:build:hooks` - Build [@norr/hooks](https://github.com/gunnarx2/norr/tree/master/packages/hooks/).
- `$ yarn nx:build:utilities` - Build [@norr/utilities](https://github.com/gunnarx2/norr/tree/master/packages/utilities/).
- `$ yarn nx:build:typescript` - Build [@norr/typescript](https://github.com/gunnarx2/norr/tree/master/packages/typescript/).
- `$ yarn nx:build:prettier` - Build [@norr/prettier](https://github.com/gunnarx2/norr/tree/master/packages/prettier/).
- `$ yarn nx:build:eslint-config-eslint-react-typescript` - Build [@norr/eslint-config-eslint-react-typescript](https://github.com/gunnarx2/norr/tree/master/packages/eslint-config-eslint-react-typescript/).
- `$ yarn nx:build:stylelint-emotion` - Build [@norr/stylelint-emotion](https://github.com/gunnarx2/norr/tree/master/packages/stylelint-emotion/).
- `$ yarn nx:build:stylelint-styled-jsx` - Build [@norr/stylelint-styled-jsx](https://github.com/gunnarx2/norr/tree/master/packages/stylelint-styled-jsx/).
- `$ yarn nx:build:all` - Build all packages.
- `$ yarn nx:test:components` - Test [@norr/components](https://github.com/gunnarx2/norr/tree/master/packages/components/).
- `$ yarn nx:test:hooks` - Test [@norr/hooks](https://github.com/gunnarx2/norr/tree/master/packages/hooks/).
- `$ yarn nx:test:utilities` - Test [@norr/utilities](https://github.com/gunnarx2/norr/tree/master/packages/utilities/).
- `$ yarn nx:test:all` - Run all tests.
- `$ yarn lerna:version` - Bump [version](https://github.com/lerna/lerna/tree/main/commands/version/) of packages changed since the last release.
- `$ yarn lerna:publish:from-git` - [Publish](https://github.com/lerna/lerna/tree/main/commands/publish/) packages tagged in the current commit.
- `$ yarn lerna:publish:all` - Publish all packages to [npm](https://www.npmjs.com/).
- `$ yarn lint:prettier:report` - Report any [Prettier](https://prettier.io/) issues.
- `$ yarn lint:prettier:fix` - Fix any [Prettier](https://prettier.io/) issues.
- `$ yarn lint:eslint:report` - Report any [ESLint](https://eslint.org/) issues.
- `$ yarn lint:eslint:fix` - Fix any [ESLint](https://eslint.org/) issues.
- `$ yarn lint:stylelint:report` - Report any [Stylelint](https://stylelint.io/) issues.
- `$ yarn lint:stylelint:fix` - Fix any [Stylelint](https://stylelint.io/) issues.
- `$ yarn lint:typescript:report` - Report any [TypeScript](https://www.typescriptlang.org/) issues.
- `$ yarn lint:all` - Run all lint scripts.
