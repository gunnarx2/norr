import '@testing-library/jest-dom';
import { useState } from 'react';

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useTrapFocus } from './TrapFocus';

const TrapFocus = () => {
  const { trapFocusProps } = useTrapFocus<HTMLDivElement>();

  return (
    <div {...trapFocusProps}>
      <a href="/">Link 1</a>
      <a href="/">Link 2</a>
      <a href="/">Link 3</a>
    </div>
  );
};

const Component = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>
        Toggle visible
      </button>
      {visible && <TrapFocus />}
    </>
  );
};

describe('TrapFocus', () => {
  test('Instance of function', () => {
    expect(useTrapFocus).toBeInstanceOf(Function);
  });

  test('Should trap focus within element', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Component />);

    act(() => getByText('Toggle visible').click());

    await user.tab();
    expect(getByText('Link 1')).toHaveFocus();

    await user.tab();
    expect(getByText('Link 2')).toHaveFocus();

    await user.tab();
    expect(getByText('Link 3')).toHaveFocus();

    await user.tab();
    expect(getByText('Link 1')).toHaveFocus();
  });

  test('Should trap focus within element with shift', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Component />);

    act(() => getByText('Toggle visible').click());

    await user.tab({ shift: true });
    expect(getByText('Link 3')).toHaveFocus();

    await user.tab({ shift: true });
    expect(getByText('Link 2')).toHaveFocus();

    await user.tab({ shift: true });
    expect(getByText('Link 1')).toHaveFocus();

    await user.tab({ shift: true });
    expect(getByText('Link 3')).toHaveFocus();
  });
});
