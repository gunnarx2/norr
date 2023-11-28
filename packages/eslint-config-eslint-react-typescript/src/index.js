const { env: getEnv } = require('./env');
const { extends: getExtends } = require('./extends');
const { overrides: getOverrides } = require('./overrides');
const { parser: getParser } = require('./parser');
const { parserOptions: getParserOptions } = require('./parserOptions');
const { plugins: getPlugins } = require('./plugins');
const { rules: getRules } = require('./rules');
const { settings: getSettings } = require('./settings');

module.exports = {
  root: true,
  parser: getParser,
  extends: getExtends,
  plugins: getPlugins,
  parserOptions: getParserOptions,
  overrides: getOverrides,
  rules: getRules,
  env: getEnv,
  settings: getSettings,
};
