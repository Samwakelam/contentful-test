import { ReactNode } from 'react';

import { Widget } from '@sam/types';

const WIDGET_MAP: Record<string, React.FC> = {};

export const registerWidgets = () => {
  Object.assign(WIDGET_MAP, {});
};

export const renderWidget = (widget: Widget, index: number) => {
  const Component = WIDGET_MAP[widget._template as string];

  if (Component) {
    const props: {} = { ...widget };

    return <Component {...props} />;
  }

  return null;
};

export const renderWidgets = (widgets: Widget[]): ReactNode[] => {
  return widgets.map((widget, index) => renderWidget(widget, index));
};
