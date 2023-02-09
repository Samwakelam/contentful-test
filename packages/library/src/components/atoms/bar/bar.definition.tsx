import { ReactElement } from 'react';

export enum BarType {
  MINI = 'mini',
  MAIN = 'main',
}

export type BarProps = {
  type?: BarType;
  menu?: {
    isFixed: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
  children: ReactElement;
};
