import { useState } from 'react';

import { Hook } from '@sam/types';

import {
  AddModelModalHandlers,
  AddModelModalState,
} from './add-model.definition';
import { useInputGroup, Validators } from '../../../forms';

export const useAddModelModal = (
  onClose: () => void
): Hook<AddModelModalState, AddModelModalHandlers> => {
  const [state, setState] = useState<
    Omit<
      AddModelModalState,
      'nameInput' | 'usDescriptionInput' | 'gbDescriptionInput'
    >
  >({
    isProcessing: false,
  });

  const nameInput = useInputGroup('', [
    [(value) => value.length > 0, 'This field Is required to have an input'],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  const usDescriptionInput = useInputGroup('', [
    [
      (value) => value.length > 0,
      'There must be a value for the default locale',
    ],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  const gbDescriptionInput = useInputGroup('', [
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  const onCreate: AddModelModalHandlers['onCreate'] = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState((prev) => ({ ...prev, isProcessing: true }));

    const nameValue = nameInput.state.value;
    const usDescValue = usDescriptionInput.state.value;
    const gbDescValue = gbDescriptionInput.state.value;
  };

  return {
    state: {
      ...state,
      nameInput,
      usDescriptionInput,
      gbDescriptionInput,
    },
    handlers: {
      onCreate,
    },
  };
};
