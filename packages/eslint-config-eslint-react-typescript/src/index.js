import env from './env';
import getExtends from './extends';
import overrides from './overrides';
import parser from './parser';
import parserOptions from './parserOptions';
import plugins from './plugins';
import rules from './rules';
import settings from './settings';

export default {
  root: true,
  env,
  extends: getExtends,
  overrides,
  parser,
  parserOptions,
  plugins,
  rules,
  settings,
};
