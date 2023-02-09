import { DispatchesType } from '@sam/types';
import { ReactElement } from 'react';

export type ModalChildProps = {
  dispatches: DispatchesType;
  onClose: () => void;
};

export type ModalProps = {
  children: ReactElement;
  modalTitle?: string;
  isOpen: boolean;
  onRequestClose: () => void;
};
