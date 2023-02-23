import { ReactElement } from 'react';

import { IconProps } from '@sam/icons';
import { ColourType } from '@sam/types';
import { ButtonProps } from '../button';

export enum DropdownType {
  MAIN = 'main',
  MINI = 'mini',
}
export enum TriggerType {
  V_TRIMMED = 'v-trimmed',
  SELECTED = 'show-selected',
  CUSTOM = 'custom',
}

export enum Alignment {
  RIGHT = 'right',
  LEFT = 'left',
}

export enum ActiveStyleType {
  BOLD = 'bold',
  BACKGROUND = 'background',
}

export type MenuItemProps = {
  text: string;
  icon?: IconProps;
  colour?: ColourType;
  isActive?: boolean;
  activeStyle?: ActiveStyleType[];
  onClick?: () => void;
};

export type TriggerProps = {
  type: TriggerType;
  customTrigger?: ReactElement;
};

export type DropdownProps = {
  menuItems: MenuItemProps[];
  trigger: TriggerProps;
  type?: DropdownType;
  align?: Alignment;
};

export type DropdownState = {
  isActive: boolean;
  isOffScreen: Alignment.LEFT | Alignment.RIGHT | null;
};

export type DropdownHandlers = {
  onClose: () => void;
  resolveTriggerButton: (triggerType: TriggerType) => ButtonProps | null;
  handleClickOutside: (event: MouseEvent) => void;
};
