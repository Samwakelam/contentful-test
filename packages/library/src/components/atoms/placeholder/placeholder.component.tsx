import { ReactElement } from 'react';
import { apply, tw } from 'twind';

import { PlaceholderProps } from './placeholder.definition';

import * as S from './placeholder.styles';

export const Placeholder = ({
  children,
  className,
}: PlaceholderProps): ReactElement<PlaceholderProps> => {
  return (
    <div
      className={tw(apply(S.PlaceholderCss, S.PlaceholderStyles), className)}
    >
      {children}
    </div>
  );
};
