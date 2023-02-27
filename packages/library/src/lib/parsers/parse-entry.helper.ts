import { Entry } from '@sam/contentful/delivery';

import { Widget } from '@sam/types';

/**
 * @function parseEntry
 *
 * @description - a function to convert the contentful Entry<any> object into an object that fits the @sam/types Widget.
 *                The Entry type is used in the delivery api and not contentful-management systems.
 *
 * @param {Entry<any>} entry
 *
 * @returns {Widget}
 */
export const parseEntry = (entry: Entry<any>): Widget => {
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
