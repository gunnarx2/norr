module.exports = {
  rules: {
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // https://www.npmjs.com/package/eslint-plugin-import
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'off', // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/export': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-relative-packages': 'error',
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.{stories,cy,cypress,spec,test,config,preset,setup}.*',
          '**/.eslintrc.js',
          '**/{cypress,test,tests}/**/*',
        ],
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [['builtin', 'external'], 'internal'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: '*.+(styles|classNames)',
            group: 'sibling',
            patternOptions: { matchBase: true },
            position: 'after',
          },
          {
            pattern: 'react?(-native)',
            group: 'external',
            position: 'before',
          },
        ],
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
    '@typescript-eslint/no-shadow': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // https://typescript-eslint.io/rules/no-inferrable-types/
    '@typescript-eslint/no-inferrable-types': 'error',

    // https://typescript-eslint.io/rules/consistent-type-definitions/
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // https://eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],

    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename'],
      },
    ],

    // https://eslint.org/docs/latest/rules/max-lines
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': 'error',
  },
};
