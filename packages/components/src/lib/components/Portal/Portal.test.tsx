import { useRef } from 'react';

import { render, within } from '@testing-library/react';

import { Portal } from './Portal';

describe('Portal', () => {
  test('Should render without container', () => {
    const { baseElement } = render(<Portal>Portal</Portal>);
    expect(baseElement).toBeTruthy();
  });

  test('Should render within container', () => {
    const PortalWithCustomContainer = () => {
      const containerRef = useRef(null);

      return (
        <>
          <div ref={containerRef}>Container</div>
          <Portal container={containerRef}>Portal</Portal>
        </>
      );
    };

    const { getByText } = render(<PortalWithCustomContainer />);
    const container = getByText('Container');

    expect(within(container).getByText('Portal')).toBeTruthy();
  });
});
