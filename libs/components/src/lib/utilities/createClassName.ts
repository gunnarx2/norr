import { ClassValue, clsx } from 'clsx';

export type CreateClassNameParameters = {
  component: string;
  unique: string;
};

export const createClassName = (
  { component, unique }: CreateClassNameParameters,
  ...inputs: ClassValue[]
) => {
  const npmOrganization = '@norr';
  return clsx(`${npmOrganization}__${component}__${unique}`, inputs);
};
