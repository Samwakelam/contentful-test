import { ReactElement, useState, useRef, useEffect } from 'react';
import { tw } from 'twind';

import { Button, ButtonVariant } from '../button';

import { Alignment, MenuDropdownProps } from './menu-dropdown.definition';

import * as S from './menu-dropdown.styles';

export const MenuDropdown = ({
  menuItems,
  align = Alignment.LEFT,
  trigger,
  type,
}: MenuDropdownProps): ReactElement<MenuDropdownProps> => {
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOffScreen, setIsOffScreen] = useState<
    Alignment.LEFT | Alignment.RIGHT | null
  >(null);

  const handleClickOutside = (event: MouseEvent) => {
    event.preventDefault();

    if (
      contentRef.current &&
      buttonRef.current &&
      !contentRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      const boundingClient = contentRef.current?.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (boundingClient.right > windowWidth) {
        setIsOffScreen(Alignment.RIGHT);
      }

      if (boundingClient.left < 0) {
        setIsOffScreen(Alignment.LEFT);
      }

      if (boundingClient.right < windowWidth && boundingClient.left > 0) {
        setIsOffScreen(null);
      }
    }
  }, [isActive]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={tw(S.MenuDropdownCss)}>
      <div ref={buttonRef}>
        <Button
          className={tw(S.MenuTriggerStyles, S.MenuTriggerCss)}
          buttonVariant={ButtonVariant.NONE}
          icon={{
            icon: 'more-v',
            ariaLabel: 'trimmed vertical menu',
          }}
          onClick={() => setIsActive(!isActive)}
        />
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
                className={tw(S.MenuButtonStyles)}
                buttonVariant={ButtonVariant.NONE}
                onClick={() => {
                  menuItem.onClick && menuItem.onClick();
                  setIsActive(false);
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
