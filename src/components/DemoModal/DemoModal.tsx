import { Fragment } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import {
  UseModalProps,
  UsePortalProps,
  useModal,
  usePortal,
} from '@norr/components';
import { DemoButton } from 'src/components';
import {
  TRANSITION_DURATIONS,
  TRANSITION_EASINGS,
} from 'src/consts/transition';

import { inline, overlay, dialog } from './DemoModal.styles';

export type DemoModalProps = {
  disableClickOutside?: UseModalProps['disableClickOutside'];
  disableEscapeKey?: UseModalProps['disableEscapeKey'];
  disablePreventScroll?: UseModalProps['disablePreventScroll'];
  disableTrapFocus?: UseModalProps['disableTrapFocus'];
  disableReturnFocus?: UseModalProps['disableReturnFocus'];
};

export const DemoModal = ({
  disableClickOutside,
  disableEscapeKey,
  disablePreventScroll,
  disableTrapFocus,
  disableReturnFocus,
}: DemoModalProps) => {
  const { modalProps, modalTriggerProps, modalCloseProps, modalIsOpen } =
    useModal<HTMLDivElement>({
      disableClickOutside,
      disableEscapeKey,
      disablePreventScroll,
      disableTrapFocus,
      disableReturnFocus,
    });

  return (
    <>
      <DemoButton {...modalTriggerProps}>Open modal</DemoButton>
      <AnimatePresence>
        {modalIsOpen && (
          <Portal>
            <motion.div
              className={overlay.className}
              transition={{
                duration: TRANSITION_DURATIONS.fast,
                ease: TRANSITION_EASINGS.nextra,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="inner">
                <div className="middle">
                  <div className="body">
                    <motion.div
                      className={dialog.className}
                      transition={{
                        duration: TRANSITION_DURATIONS.fast,
                        ease: TRANSITION_EASINGS.nextra,
                      }}
                      initial={{ y: 25 }}
                      animate={{ y: 0 }}
                      exit={{ y: 25 }}
                    >
                      <div className="modal" {...modalProps}>
                        <h2 className="heading">Modal</h2>
                        <p className="paragraph">
                          In consequat Lorem minim velit exercitation ea ea
                          cupidatat tempor exercitation ullamco veniam aute.
                          Laborum aliqua Lorem eiusmod est nulla labore
                          deserunt.
                        </p>
                        <p className="paragraph">
                          Esse magna magna voluptate aliquip. Esse quis occaecat
                          laborum consectetur laboris est dolor esse adipisicing
                          sit elit consectetur voluptate. Amet ut eiusmod est
                          proident mollit id ut consectetur.
                        </p>
                        <div className="close-holder">
                          <DemoButton autoFocus {...modalCloseProps}>
                            Close modal
                          </DemoButton>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
      <style jsx>{inline}</style>
      {overlay.styles}
      {dialog.styles}
    </>
  );
};

const Portal = (props: UsePortalProps) => {
  const { portalProps } = usePortal(props);
  return <Fragment {...portalProps} />;
};
