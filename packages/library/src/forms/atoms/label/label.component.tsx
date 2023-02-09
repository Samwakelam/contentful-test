import { ReactElement } from 'react';
import { tw } from 'twind';

import { LabelProps } from './label.definition';

import * as S from './label.styles';

export const Label = ({
  htmlFor,
  form,
  text,
  showLabel,
  className,
}: LabelProps): ReactElement<LabelProps> => {
  return (
    <label
      className={tw(
        S.LabelCss,
        !showLabel && S.LabelHiddenCss,
        className && className
      )}
      htmlFor={htmlFor}
      form={form}
    >
      {text}
    </label>
  );
};
