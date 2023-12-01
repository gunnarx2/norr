import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import {
  UsePreventScrollParameters,
  usePreventScroll,
} from './usePreventScroll';

const Component = ({ preventScroll }: UsePreventScrollParameters) => {
  usePreventScroll(preventScroll);
  return <div />;
};

describe('usePreventScroll()', () => {
  test('Instance of function', () => {
    expect(usePreventScroll).toBeInstanceOf(Function);
  });

  test('Should set "overflow: hidden;" on mount and remove on unmount', () => {
    const style = 'overflow: hidden';
    expect(document.documentElement).not.toHaveStyle(style);

    const result = render(<Component preventScroll />);
    expect(document.documentElement).toHaveStyle(style);

    result.unmount();
    expect(document.documentElement).not.toHaveStyle(style);
  });
});
