import { ReactElement, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import { tw } from 'twind';

import { Button, ButtonVariant } from '../button';

import { ModalProps } from './modal.definition';

import * as S from './modal.styles';

export const Modal = ({
  modalTitle,
  isOpen = false,
  onRequestClose,
  children,
}: ModalProps): ReactElement<ModalProps> => {
  const modal = useRef(null);

  useEffect(() => {
    // FIXES Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}
    // This is due to using serverside rendering.
    ReactModal.setAppElement('body');
  }, []);

  return (
    <ReactModal
      ref={modal}
      className={tw(S.ModalCss)}
      overlayClassName={{
        base: tw(S.OverlayCss, S.OverlayStyles),
        afterOpen: tw(S.OverlayAfterOpenCss),
        beforeClose: tw(S.OverlayBeforeCloseCss),
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={300}
    >
      <div className={tw(S.HeaderCss)}>
        {modalTitle && <h5>{modalTitle}</h5>}
        <Button
          buttonVariant={ButtonVariant.SECONDARY}
          icon={{ icon: 'cross', ariaLabel: 'close' }}
          onClick={onRequestClose}
        />
      </div>
      <div className={tw(S.ContentCss)}>{children}</div>
    </ReactModal>
  );
};
