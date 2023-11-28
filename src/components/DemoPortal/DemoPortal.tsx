import { Fragment, useRef } from 'react';

import { UsePortalProps, usePortal } from '@norr/components';

import { inline } from './DemoPortal.styles';

export const DemoPortal = () => {
  return (
    <>
      <div className="regular">
        I&apos;m rendered where the component is used.
      </div>
      <div className="information">
        Scroll to the bottom of the page to see the yellow portal in this
        example.
      </div>
      <Portal>
        <div className="portal">
          I&apos;m portaled at the end of document.body.
        </div>
      </Portal>
      <style jsx>{inline}</style>
    </>
  );
};

export const DemoPortalWithCustomContainer = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div className="regular" ref={containerRef}>
        I&apos;m rendered where the component is used.
      </div>
      <Portal container={containerRef}>
        <div className="portal">
          I&apos;m portaled at the end of the purple box. 👆
        </div>
      </Portal>
      <style jsx>{inline}</style>
    </>
  );
};

const Portal = (props: UsePortalProps) => {
  const { portalProps } = usePortal(props);
  return <Fragment {...portalProps} />;
};
