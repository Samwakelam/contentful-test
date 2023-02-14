import React from 'react';

import { Hook } from '@sam/types';

import { InputGroupHandlers, InputGroupState } from '../../../forms';

export type AddModelModalProps = {
  onClose: () => void;
};

export type AddModelModalState = {
  nameInput: Hook<InputGroupState, InputGroupHandlers>;
  usDescriptionInput: Hook<InputGroupState, InputGroupHandlers>;
  gbDescriptionInput: Hook<InputGroupState, InputGroupHandlers>;

  isProcessing: boolean;
};

export type AddModelModalHandlers = {
  onCreate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
