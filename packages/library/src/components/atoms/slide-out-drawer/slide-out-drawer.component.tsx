import { ReactElement, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import { apply, tw } from 'twind';

import { Button, ButtonVariant } from '../button';

import { SlideOutDrawerProps } from './slide-out-drawer.definition';

import * as S from './slide-out-drawer.styles';

export const SlideOutDrawer = ({
  isOpen,
  onRequestClose,
  drawerTitle,
  children,
  className,
}: SlideOutDrawerProps): ReactElement<SlideOutDrawerProps> => {
  const drawer = useRef(null);

  useEffect(() => {
    // FIXES Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}
    // This is due to using serverside rendering.
    ReactModal.setAppElement('body');
  }, []);

  return (
    <ReactModal
      ref={drawer}
      className={tw(apply(S.DrawerCss), className)}
      overlayClassName={{
        base: tw(S.OverlayCss),
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
        <Button
          buttonVariant={ButtonVariant.NONE}
          icon={{ icon: 'arrow-left', ariaLabel: 'back' }}
          onClick={onRequestClose}
        />
        {drawerTitle && <h5>{drawerTitle}</h5>}
      </div>
      <div className={tw(S.ContentCss)}>{children}</div>
    </ReactModal>
  );
};
