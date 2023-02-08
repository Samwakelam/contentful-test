import { Widget } from '@sam/types';
import { FillType } from '@sam/icons';

export const mockWidgetData: Widget = {
  name: 'image',
  key: 'image',
  description: 'Add an image to your gift',
  thumbnail: './image.jpg',
  icon: { icon: 'camera', ariaLabel: 'image', fill: FillType.SOLID },
  config: {},
};
