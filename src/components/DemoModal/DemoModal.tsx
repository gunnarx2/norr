import { motion, AnimatePresence } from 'framer-motion';

import { UseModalProps, useModal } from '@norr/components';
import { DemoButton, Portal, TrapFocus } from 'src/components';
import {
  TRANSITION_DURATIONS,
  TRANSITION_EASINGS,
} from 'src/consts/transition';

import { inline, overlay, inner, dialog } from './DemoModal.styles';

export type DemoModalProps = {
  disableClickOutside?: UseModalProps['disableClickOutside'];
  disableEscapeKey?: UseModalProps['disableEscapeKey'];
  disablePreventScroll?: UseModalProps['disablePreventScroll'];
};

export const DemoModal = ({
  disableClickOutside,
  disableEscapeKey,
  disablePreventScroll,
}: DemoModalProps) => {
  const { modalProps, modalTriggerProps, modalCloseProps, modalIsOpen } =
    useModal<HTMLDivElement>({
      disableClickOutside,
      disableEscapeKey,
      disablePreventScroll,
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
              <TrapFocus className={inner.className}>
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
              </TrapFocus>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
      <style jsx>{inline}</style>
      {overlay.styles}
      {inner.styles}
      {dialog.styles}
    </>
  );
};
