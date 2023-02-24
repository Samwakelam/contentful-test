import { ReactElement, useRef } from 'react';

import { tw } from '@sam/theme/twind';

import { Button, ButtonVariant } from '../button';

import {
  ActiveStyleType,
  Alignment,
  DropdownProps,
  TriggerType,
} from './dropdown.definition';
import { useDropdown } from './dropdown.hook';

import * as S from './dropdown.styles';

export const Dropdown = ({
  menuItems,
  align = Alignment.LEFT,
  trigger,
  type,
}: DropdownProps): ReactElement<DropdownProps> => {
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const {
    state: { isActive, isOffScreen },
    handlers,
  } = useDropdown(contentRef, buttonRef, menuItems);

  return (
    <div className={tw(S.MenuDropdownCss)}>
      <div ref={buttonRef}>
        <>
          {trigger.type === TriggerType.CUSTOM ? (
            trigger.customTrigger
          ) : (
            <Button {...handlers.resolveTriggerButton(trigger.type)} />
          )}
        </>
      </div>

      <div
        className={tw(
          S.MenuListCss(isOffScreen === null ? align : isOffScreen),
          isActive && S.MenuListActiveCss
        )}
        ref={contentRef}
      >
        {menuItems.map((menuItem) => {
          return (
            <div
              className={tw(S.MenuItemsCss(menuItem.colour))}
              key={menuItem.text}
            >
              <Button
                className={tw(
                  S.MenuButtonStyles,
                  menuItem.activeStyle &&
                    resolveActiveStyle(menuItem.activeStyle, menuItem.isActive)
                )}
                buttonVariant={ButtonVariant.NONE}
                onClick={(e: any) => {
                  menuItem.onClick && menuItem.onClick();
                  handlers.onClose();
                }}
                startIcon={menuItem.icon}
              >
                {menuItem.text}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const resolveActiveStyle = (
  styles: ActiveStyleType[],
  isActive: boolean | undefined
) => {
  const _styles = [];

  if (styles?.includes(ActiveStyleType.BOLD) && isActive) {
    _styles.push(S.SelectedBoldStyles);
  }
  if (styles?.includes(ActiveStyleType.BACKGROUND) && isActive) {
    _styles.push(S.SelectedBackgroundCss);
  }

  return _styles;
};
