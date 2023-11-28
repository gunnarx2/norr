export default {
  overrides: [
    // Jest - https://github.com/jest-community/eslint-plugin-jest
    // Testing Library - https://github.com/testing-library/eslint-plugin-testing-library
    {
      files: ['**/*.{spec,test}.*'],
      rules: {
        'testing-library/no-node-access': 'off',
      },
    },

    // Declaration files - https://typescript-eslint.io/rules/consistent-type-definitions/
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
