import { Fragment, useRef } from 'react';

import { render, within } from '@testing-library/react';

import { UsePortalProps, usePortal } from './Portal';

const Portal = (props: UsePortalProps) => {
  const { portalProps } = usePortal(props);
  return <Fragment {...portalProps} />;
};

describe('Portal', () => {
  test('Instance of function', () => {
    expect(usePortal).toBeInstanceOf(Function);
  });

  test('Should render without container', () => {
    const { baseElement } = render(
      <Portal>
        <div>Portal</div>
      </Portal>
    );
    expect(baseElement).toBeTruthy();
  });

  test('Should render within container', () => {
    const PortalWithCustomContainer = () => {
      const containerRef = useRef(null);

      return (
        <>
          <div ref={containerRef}>Container</div>
          <Portal container={containerRef}>
            <div>Portal</div>
          </Portal>
        </>
      );
    };

    const { getByText } = render(<PortalWithCustomContainer />);
    const container = getByText('Container');

    expect(within(container).getByText('Portal')).toBeTruthy();
  });
});
