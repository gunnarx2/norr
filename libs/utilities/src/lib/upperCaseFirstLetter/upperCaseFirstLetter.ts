export const upperCaseFirstLetter = <T extends string>(string: string): T => {
  if (typeof string !== 'string') {
    return string as T;
  }

  return `${string.charAt(0).toUpperCase()}${string.slice(1)}` as T;
};
