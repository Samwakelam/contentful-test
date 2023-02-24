import { useEffect, useState } from 'react';

import { tw } from '@sam/theme/twind';
import { Hook } from '@sam/types';

import { ButtonVariant } from '../button';

import {
  Alignment,
  DropdownHandlers,
  DropdownProps,
  DropdownState,
  TriggerType,
} from './dropdown.definition';

import * as S from './dropdown.styles';

export const useDropdown = (
  contentRef: React.RefObject<HTMLDivElement>,
  buttonRef: React.RefObject<HTMLDivElement>,
  menuItems: DropdownProps['menuItems']
): Hook<DropdownState, DropdownHandlers> => {
  const [state, setState] = useState<DropdownState>({
    isActive: false,
    isOffScreen: null,
  });

  const currentMenuItem = menuItems.find((item) => item.isActive);

  const onClose = () => {
    setState((prev) => ({ ...prev, isActive: false }));
  };

  const handleClickOutside: DropdownHandlers['handleClickOutside'] = (
    event
  ) => {
    event.preventDefault();

    if (
      contentRef.current &&
      buttonRef.current &&
      !contentRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  const resolveTriggerButton: DropdownHandlers['resolveTriggerButton'] = (
    triggerType
  ) => {
    switch (triggerType) {
      case TriggerType.V_TRIMMED: {
        return {
          className: tw(S.MenuTriggerStyles, S.MenuTriggerCss),
          buttonVariant: ButtonVariant.NONE,
          icon: {
            icon: 'more-v',
            ariaLabel: 'trimmed vertical menu',
          },
          onClick: () =>
            setState((prev) => ({ ...prev, isActive: !prev.isActive })),
        };
      }
      case TriggerType.SELECTED: {
        return {
          className: tw(
            S.MenuTriggerStyles,
            S.MenuTriggerCss,
            S.TriggerSelectedCss
          ),
          buttonVariant: ButtonVariant.NONE,
          endIcon: {
            icon: state.isActive ? 'chevron-up' : 'chevron-down',
            ariaLabel: 'more',
          },
          children: currentMenuItem ? currentMenuItem.text : undefined,
          onClick: () =>
            setState((prev) => ({ ...prev, isActive: !prev.isActive })),
        };
      }
      default: {
        return null;
      }
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      const boundingClient = contentRef.current?.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (boundingClient.right > windowWidth) {
        setState((prev) => ({ ...prev, isOffScreen: Alignment.RIGHT }));
      }

      if (boundingClient.left < 0) {
        setState((prev) => ({ ...prev, isOffScreen: Alignment.LEFT }));
      }

      if (boundingClient.right < windowWidth && boundingClient.left > 0) {
        setState((prev) => ({ ...prev, isOffScreen: null }));
      }
    }
  }, [state.isActive, contentRef]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    state,
    handlers: {
      onClose,
      handleClickOutside,
      resolveTriggerButton,
    },
  };
};
