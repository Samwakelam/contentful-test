import { ReactElement } from 'react';

export enum DirectionType {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export enum SizeType {
  S = 'small',
  M = 'medium',
  L = 'large',
  XL = 'extra-large',
}

export type TooltipProps = {
  content: string;
  direction?: DirectionType;
  delay?: number;
  defaultOpen?: boolean;
  size?: SizeType;
  children: ReactElement;
};
