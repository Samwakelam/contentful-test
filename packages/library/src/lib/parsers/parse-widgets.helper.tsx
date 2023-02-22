import React, { ReactElement } from 'react';

import { isWidget, RegionCode, Widget } from '@sam/types';

import { SamTestModel } from '../../components';
import { parseEntry } from './parse-entry.helper';

/**
 * @function parseWidget
 *
 * @description - This function accepts a Widget Type which possibly has localised entries for each property
 *                and returns a plain object where each property has a single value and can be used in a
 *                specified language.
 *
 * @param { Widget } widget
 * @param { RegionCode } region
 * @param { RegionCode } defaultRegion
 *
 * @returns { Object }
 */
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
  widgets: any[],
  region: RegionCode,
  defaultRegion: RegionCode,
  editorComponent?: React.FC<any>
) => {
  const map = widgets.map((widget) => {
    const _widget = isWidget(widget) ? widget : parseEntry(widget);

    return renderWidget(_widget, region, defaultRegion, editorComponent);
  });
  return map;
};
