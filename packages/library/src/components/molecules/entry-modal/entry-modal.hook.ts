import { useState } from 'react';

import { Hook } from '@sam/types';

import { useInputGroup, Validators } from '../../../forms';
import { ModelProps } from '../../../views';

import {
  EntryModalHandlers,
  EntryModalProps,
  EntryModalState,
} from './entry-modal.definition';

export const useEntryModal = ({
  type,
  onClose,
  dispatches,
  widget,
}: EntryModalProps): Hook<EntryModalState, EntryModalHandlers> => {
  const { onAdd, onUpdate } = dispatches;

  const [state, setState] = useState<
    Omit<
      EntryModalState,
      'nameInput' | 'usDescriptionInput' | 'gbDescriptionInput'
    >
  >({
    isProcessing: false,
  });

  const nameInput = useInputGroup(widget?.name['en-US'] ?? '', [
    [(value) => value.length > 0, 'This field Is required to have an input'],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  const usDescriptionInput = useInputGroup(widget?.description['en-US'] ?? '', [
    [
      (value) => value.length > 0,
      'There must be a value for the default locale',
    ],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  const gbDescriptionInput = useInputGroup(widget?.description['en-GB'] ?? '', [
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  const onCreate: EntryModalHandlers['onCreate'] = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState((prev) => ({ ...prev, isProcessing: true }));

    const nameValue = nameInput.state.value;
    const usDescValue = usDescriptionInput.state.value;
    const gbDescValue = gbDescriptionInput.state.value;

    const model: ModelProps = {
      name: { 'en-US': nameValue },
      description: { 'en-US': usDescValue },
    };

    if (gbDescValue) {
      model.description['en-GB'] = gbDescValue;
    }

    await onAdd(model, () => {});

    setState((prev) => ({ ...prev, isProcessing: false }));
    onClose();
  };

  const onEdit: EntryModalHandlers['onEdit'] = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState((prev) => ({ ...prev, isProcessing: true }));

    const nameValue = nameInput.state.value;
    const usDescValue = usDescriptionInput.state.value;
    const gbDescValue = gbDescriptionInput.state.value;

    const model: ModelProps & { id: string } = {
      id: widget!.id,
      name: { 'en-US': nameValue },
      description: { 'en-US': usDescValue },
    };

    if (gbDescValue) {
      model.description['en-GB'] = gbDescValue;
    }

    await onUpdate(model, () => {});

    setState((prev) => ({ ...prev, isProcessing: false }));
    onClose();
  };

  const resolveIsButtonDisabled: EntryModalHandlers['resolveIsButtonDisabled'] =
    () => {
      const valid =
        nameInput.state.isValid &&
        usDescriptionInput.state.isValid &&
        gbDescriptionInput.state.isValid;

      const hasValues = nameInput.state.value && usDescriptionInput.state.value;

      return !valid && !hasValues;
    };

  const resolveSubmitButton: EntryModalHandlers['resolveSubmitButton'] = () => {
    switch (type) {
      case 'create': {
        return {
          children: 'Create',
          onClick: (e) => onCreate(e),
        };
      }
      case 'update': {
        return {
          children: 'Update',
          onClick: (e) => onEdit(e),
        };
      }
    }
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
      onEdit,
      resolveIsButtonDisabled,
      resolveSubmitButton,
    },
  };
};
