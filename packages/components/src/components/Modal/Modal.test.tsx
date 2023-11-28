import { fireEvent, render, screen } from '@testing-library/react';

import { UseModalProps, useModal } from './Modal';

const Modal = (props: UseModalProps) => {
  const { modalProps, modalTriggerProps, modalCloseProps, modalIsOpen } =
    useModal<HTMLDivElement>(props);

  return (
    <div data-testid="outside-modal">
      <button {...modalTriggerProps}>Trigger modal</button>
      {modalIsOpen && (
        <div {...modalProps}>
          <button {...modalCloseProps}>Close modal</button>
        </div>
      )}
    </div>
  );
};

describe('Modal', () => {
  test('Instance of function', () => {
    expect(useModal).toBeInstanceOf(Function);
  });

  test('Should be visible when clicking the trigger button', () => {
    const { getByText } = render(<Modal />);

    const trigger = getByText('Trigger modal');
    fireEvent.click(trigger);

    const close = getByText('Close modal');
    expect(close).toBeTruthy();
  });

  test('Should be hidden when clicking the close button', () => {
    const { getByText } = render(<Modal />);

    const trigger = getByText('Trigger modal');
    fireEvent.click(trigger);

    const close = getByText('Close modal');
    fireEvent.click(close);

    const closeScreen = screen.queryByText('Close modal');
    expect(closeScreen).not.toBeTruthy();
  });

  test('Should close modal when clicking outside', () => {
    const { getByText } = render(<Modal />);

    const trigger = getByText('Trigger modal');
    fireEvent.click(trigger);

    const close = getByText('Close modal');
    expect(close).toBeTruthy();

    const outsideModal = screen.getByTestId('outside-modal');
    fireEvent.click(outsideModal);

    const closeScreen = screen.queryByText('Close modal');
    expect(closeScreen).not.toBeTruthy();
  });

  test('Should not close modal when passing disableClickOutside', () => {
    const { getByText } = render(<Modal disableClickOutside />);

    const trigger = getByText('Trigger modal');
    fireEvent.click(trigger);

    const close = getByText('Close modal');
    expect(close).toBeTruthy();

    const outsideModal = screen.getByTestId('outside-modal');
    fireEvent.click(outsideModal);

    const closeScreen = screen.queryByText('Close modal');
    expect(closeScreen).toBeTruthy();
  });

  test('Should close modal pressing the escape key', () => {
    const { getByText } = render(<Modal />);

    const trigger = getByText('Trigger modal');
    fireEvent.click(trigger);

    const close = getByText('Close modal');
    expect(close).toBeTruthy();

    fireEvent.keyDown(window, { key: 'Escape' });

    const closeScreen = screen.queryByText('Close modal');
    expect(closeScreen).not.toBeTruthy();
  });

  test('Should not close modal when passing disableEscapeKey', () => {
    const { getByText } = render(<Modal disableEscapeKey />);

    const trigger = getByText('Trigger modal');
    fireEvent.click(trigger);

    const close = getByText('Close modal');
    expect(close).toBeTruthy();

    fireEvent.keyDown(window, { key: 'Escape' });

    const closeScreen = screen.queryByText('Close modal');
    expect(closeScreen).toBeTruthy();
  });

  test('Should prevent scroll when modal is open', () => {});

  test('Should not prevent scroll when passing disablePreventScroll', () => {});
});
