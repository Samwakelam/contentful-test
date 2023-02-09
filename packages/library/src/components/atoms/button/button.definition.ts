import React, { ReactNode } from 'react';

import { IconProps } from '@sam/icons';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  SUCCESS = 'success',
  PRODUCT = 'product',
  NONE = 'none',
}

export type ButtonProps = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonVariant?: ButtonVariant;
  className?: string;
  startIcon?: IconProps;
  endIcon?: IconProps;
  icon?: IconProps;
  disabled?: boolean;
};
