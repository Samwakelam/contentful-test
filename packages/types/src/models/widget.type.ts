import { IconProps } from '@sam/icons';

export type TemplateProps = {
  unit: 'span' | 'start' | 'end' | null;
  value: number;
};

export type ConfigProps = {
  row: TemplateProps[];
  column: TemplateProps[];
  order: number;
};

export type Widget = {
  name: string;
  key: string;
  description: string;
  thumbnail?: string;
  icon: IconProps;
  config: {
    [key: string]: ConfigProps;
  };
};
