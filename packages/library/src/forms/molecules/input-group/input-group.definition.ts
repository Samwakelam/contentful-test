import React from 'react';
import { InputProps } from '../../atoms';
import { LabelProps } from '../../atoms/label/label.definition';

export enum ValidationType {
  EMAIL = 'email',
  GENERIC_STRING = 'generic string',
  LINK = 'link',
  SLUG = 'slug',
}

export type FieldValidators = Array<[(value: string) => boolean, string]>;

export type InputGroupState = {
  value: string;
  error: {
    hasError: boolean;
    messages: (string | undefined)[];
  };
  isValid: boolean;
};

export type InputGroupHandlers = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface InputGroupProps
  extends LabelProps,
    Omit<InputProps, 'hasError' | 'isValid'> {
  id?: string;
  label: string;
  associatedForm?: string;
  showLabel: boolean;
  labelText: string;
  name: string;
  state: InputGroupState;
  handlers: InputGroupHandlers;
}
