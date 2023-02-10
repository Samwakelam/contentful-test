import React, { ReactElement, ReactNode } from 'react';
import { Entry } from 'contentful';

import { RegionCode, Widget } from '@sam/types';

import * as library from '@sam/library';

export const parseEntry = (entry: Entry<any>) => {
  const { sys, fields } = entry;

  const properties = Object.entries(fields)
    .map(([key, value]) => [key, value])
    .reduce((obj, entry: any[]) => {
      // @ts-ignore
      obj[entry[0]] = entry[1];
      return obj;
    }, {});

  return {
    _template: sys.contentType.sys.id,
    id: sys.id,
    ...properties,
  };
};

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
    samTestModel: library.SamTestModel,
  });
};

export const renderWidgets = (
  widget: Widget,
  region: RegionCode,
  defaultRegion: RegionCode
): ReactNode => {
  const Component = WIDGET_MAP[widget._template as string];

  if (Component) {
    const props = parseWidget(widget, region, defaultRegion);

    return <Component {...props} />;
  }

  return null;
};
