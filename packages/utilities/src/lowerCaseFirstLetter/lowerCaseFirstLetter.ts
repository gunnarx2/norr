export const lowerCaseFirstLetter = <T extends string>(string: string): T => {
  if (typeof string !== 'string') {
    return string as T;
  }

  return `${string.charAt(0).toLowerCase()}${string.slice(1)}` as T;
};
