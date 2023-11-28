module.exports = {
  settings: {
    // https://www.npmjs.com/package/eslint-plugin-import
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: 'src',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },

    // https://www.npmjs.com/package/eslint-plugin-react
    react: {
      version: 'detect',
    },
  },
};
