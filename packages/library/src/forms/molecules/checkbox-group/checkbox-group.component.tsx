import { Icon } from '@sam/icons';
import { ReactElement, useRef } from 'react';
import { tw } from 'twind';

import { Label } from '../../atoms';

import { CheckboxGroupProps } from './checkbox-group.definition';

import * as S from './checkbox-group.styles';

export const CheckboxGroup = ({
  id,
  labelText,
  value,
  name,
  onChecked,
  checked,
}: CheckboxGroupProps): ReactElement<CheckboxGroupProps> => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (inputRef.current) {
      const _isChecked = inputRef.current?.checked;
      const _value = inputRef.current?.value;

      onChecked({ value: _value, checked: _isChecked });
    }
  };

  return (
    <div className={tw(S.CheckboxGroupCss)}>
      <input
        ref={inputRef}
        className={tw(S.InputCss)}
        type="checkbox"
        id={id}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        defaultChecked={checked}
      />
      <span
        className={tw(S.CheckboxCss, checked && S.CheckboxCheckedCss)}
      ></span>
      <Label
        className={tw(S.LabelCss)}
        htmlFor={id}
        text={labelText}
        showLabel
      />
      {checked && (
        <Icon icon="tick" ariaLabel="checked" className={tw(S.IconCss)} />
      )}
    </div>
  );
};
