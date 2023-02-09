import { ReactElement } from 'react';
import { tw } from 'twind';

import { Icon } from '@sam/icons';

import { Input, Label } from '../../atoms';
import { getCase } from '../../../helpers';

import { InputGroupProps } from './input-group.definition';

import * as S from './input-group.styles';

export const InputGroup = ({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  associatedForm,
  labelText,
  showLabel,
  state,
  handlers,
}: InputGroupProps): ReactElement<InputGroupProps> => {
  const {
    error: { hasError, messages },
    isValid,
    value,
  } = state;
  const { onChange } = handlers;

  return (
    <article className={tw(S.InputGroupCss)}>
      <Label
        htmlFor={getCase(label, 'kebab')}
        form={associatedForm}
        text={labelText}
        showLabel={showLabel}
      />
      <div className={tw(S.InputWrapperCss)}>
        <Input
          id={getCase(label, 'kebab')}
          type={type}
          hasError={hasError}
          isValid={isValid}
          name={name}
          placeholder={placeholder}
          form={associatedForm}
          required={required}
          onChange={onChange}
          value={value}
        />
        {isValid && (
          <div className={tw(S.IconCss, S.IconTickCss)}>
            <Icon icon="tick" ariaLabel="valid" />
          </div>
        )}
        {hasError && (
          <div className={tw(S.IconCss, S.IconCrossCss)}>
            <Icon icon="cross" ariaLabel="error" />
          </div>
        )}
        {!hasError && (
          <p className={tw(S.MessageCss)} aria-hidden="true">
            You should never see or hear me
          </p>
        )}
        {hasError && (
          <p className={tw(S.MessageCss, S.MessageErrorCss)}>{messages}</p>
        )}
      </div>
    </article>
  );
};
