import { ReactElement } from 'react';
import { tw } from 'twind';

import { InputProps } from './input.definition';

import * as S from './input.styles';

export const Input = ({
  id,
  label,
  type = 'text',
  hasError,
  isValid,
  name,
  required = false,
  placeholder,
  form,
  ...props
}: InputProps): ReactElement<InputProps> => {
  return (
    <input
      id={id}
      className={tw(
        S.InputCss,
        hasError && S.InputHasErrorCss,
        isValid && S.InputIsValidCss
      )}
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      form={form}
      data-error={hasError}
      {...props}
    />
  );
};
