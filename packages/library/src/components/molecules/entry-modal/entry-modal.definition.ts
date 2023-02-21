import React from 'react';

import { DispatchesType, Hook, Widget } from '@sam/types';

import { InputGroupHandlers, InputGroupState } from '../../../forms';
import { ButtonProps } from '../../atoms';

export type EntryModalProps = {
  type: 'create' | 'update';
  onClose: () => void;
  dispatches: DispatchesType;
  widget?: Widget;
};

export type EntryModalState = {
  nameInput: Hook<InputGroupState, InputGroupHandlers>;
  usDescriptionInput: Hook<InputGroupState, InputGroupHandlers>;
  gbDescriptionInput: Hook<InputGroupState, InputGroupHandlers>;
  isProcessing: boolean;
};

export type EntryModalHandlers = {
  onCreate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onEdit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  resolveIsButtonDisabled: () => boolean;
  resolveSubmitButton: () => ButtonProps;
};
