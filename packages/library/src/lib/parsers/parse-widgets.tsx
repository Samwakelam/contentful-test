import React, { FunctionComponent, ReactElement, ReactNode } from 'react';

import { RegionCode, Widget } from '@sam/types';

import { SamTestModel } from '../../components';

export const parseWidget = (
  widget: Widget,
  region: RegionCode,
  defaultRegion: RegionCode
) => {
  const _widget = { ...widget };

  delete _widget._template;

  return Object.entries(_widget)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        const _value = value[region] || value[defaultRegion];

        return [key, _value];
      }

      return [key, value];
    })
    .reduce((obj, entry: any[]) => {
      // @ts-ignore
      obj[entry[0]] = entry[1];
      return obj;
    }, {});
};

const WIDGET_MAP: Record<string, React.FC> = {};

export const registerWidgets = () => {
  Object.assign(WIDGET_MAP, {
    samTestModel: SamTestModel,
  });
};

export const renderWidget = (
  widget: Widget,
  region: RegionCode,
  defaultRegion: RegionCode,
  editorComponent?: React.FC<any>
): ReactElement | null => {
  const Component = WIDGET_MAP[widget._template as string];

  if (editorComponent) {
    const props = parseWidget(widget, region, defaultRegion);
    const EditorComponent = editorComponent;

    return (
      <EditorComponent key={widget.id} widgetId={widget.id}>
        <Component {...props} />
      </EditorComponent>
    );
  }

  if (Component) {
    const props = parseWidget(widget, region, defaultRegion);

    return <Component key={widget.id} {...props} />;
  }

  return null;
};

export const renderWidgets = (
  widgets: Widget[],
  region: RegionCode,
  defaultRegion: RegionCode,
  editorComponent?: React.FC<any>
) => {
  const map = widgets.map((widget) =>
    renderWidget(widget, region, defaultRegion, editorComponent)
  );
  return map;
};
