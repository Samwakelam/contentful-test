import { ReactElement } from 'react';
import { tw } from 'twind';
import { Button, ButtonVariant } from '../button';
import { BarProps } from './bar.definition';

import * as S from './bar.styles';

export const Bar = ({
  type,
  menu,
  children,
}: BarProps): ReactElement<BarProps> => {
  return (
    <div className={tw(S.BarCss)}>
      {menu && (
        <div
          className={tw(S.TriggerBoxCss, menu.isFixed && S.TriggerBoxHiddenCss)}
        >
          <Button
            className={tw(S.TriggerCss)}
            icon={{ icon: 'burger', ariaLabel: 'open menu' }}
            buttonVariant={ButtonVariant.NONE}
            onClick={(e) => menu.onClick(e)}
          />
        </div>
      )}
      <div className={tw(S.ContentCss)}>{children}</div>
    </div>
  );
};
