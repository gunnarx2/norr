// import { GetServerSideProps } from 'next';

import { Fragment, ReactNode } from 'react';

import {
  UsePortalProps,
  UseTrapFocusProps,
  useModal,
  usePortal,
  useTrapFocus,
} from '@norr/components';

// export default () => null;

// export const getServerSideProps: GetServerSideProps = async () => ({
//   redirect: {
//     permanent: true,
//     destination: '/get-started/overview',
//   },
// });

const Portal = (props: UsePortalProps) => {
  const { portalProps } = usePortal(props);
  return <Fragment {...portalProps} />;
};

type TrapFocusProps = {
  children: ReactNode;
};

const TrapFocus = ({
  children,
  ...rest
}: TrapFocusProps & UseTrapFocusProps) => {
  const { trapFocusProps } = useTrapFocus<HTMLDivElement>(rest);
  return <div {...trapFocusProps}>{children}</div>;
};

const Home = () => {
  const { modalProps, modalTriggerProps, modalCloseProps, modalIsOpen } =
    useModal<HTMLDivElement>();

  return (
    <>
      <button {...modalTriggerProps}>Trigger modal</button>
      {modalIsOpen && (
        <Portal>
          <TrapFocus style={{ position: 'fixed', zIndex: 1337, inset: 0 }}>
            <div {...modalProps} style={{ backgroundColor: 'teal' }}>
              <span>Modal content.</span>
              <button {...modalCloseProps}>Close modal</button>
            </div>
          </TrapFocus>
        </Portal>
      )}
    </>
  );
};

export default Home;
