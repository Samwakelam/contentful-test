import { useState } from 'react';

import { Hook } from '@sam/types';

import {
  FieldValidators,
  InputGroupHandlers,
  InputGroupState,
} from './input-group.definition';

export const useInputGroup = (
  initialValue: string,
  validators: FieldValidators
): Hook<InputGroupState, InputGroupHandlers> => {
  const [state, setState] = useState<InputGroupState>({
    value: initialValue,
    error: {
      hasError: false,
      messages: [],
    },
    isValid: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    e.preventDefault();

    const inputField = e.currentTarget as HTMLInputElement;
    const inputValue = inputField.value;

    const errorMessages: (string | undefined)[] = validators.map(
      ([validator, message]) => {
        const isValid = validator(inputValue);

        if (!isValid) {
          return message;
        }
      }
    );

    setState((prevState) => ({
      ...prevState,
      value: inputValue,
      error: {
        hasError: !errorMessages.every((entry) => typeof entry === 'undefined'),
        messages: errorMessages,
      },
      isValid: errorMessages.every((entry) => typeof entry === 'undefined'),
    }));
  };

  return {
    state,
    handlers: { onChange },
  };
};
