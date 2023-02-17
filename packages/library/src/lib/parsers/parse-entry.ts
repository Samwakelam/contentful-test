import { Entry } from 'contentful';

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
