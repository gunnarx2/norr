const lib = jest.requireActual('tabbable');

module.exports = {
  ...lib,
  tabbable: (node: unknown, options: Record<string, any>) =>
    lib.tabbable(node, { ...options, displayCheck: 'none' }),
  focusable: (node: unknown, options: Record<string, any>) =>
    lib.focusable(node, { ...options, displayCheck: 'none' }),
  isFocusable: (node: unknown, options: Record<string, any>) =>
    lib.isFocusable(node, { ...options, displayCheck: 'none' }),
  isTabbable: (node: unknown, options: Record<string, any>) =>
    lib.isTabbable(node, { ...options, displayCheck: 'none' }),
};
