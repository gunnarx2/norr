import { render } from '@testing-library/react';

import { Portal } from './Portal';

describe('Portal', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<Portal>Children</Portal>);
    expect(baseElement).toBeTruthy();
  });
});
