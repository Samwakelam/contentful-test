import { describe, it, expect } from 'vitest';

import { mockEntry } from '../../../__synthetics__';
import { mockWidget } from '../../../__synthetics__/widget.mock';
import { parseEntry } from './parse-entry.helper';

describe('parse-entry', () => {
  it('should convert the contentful Entry to a system Widget', () => {
    const entry = mockEntry;

    //@ts-ignore - not passing the update promise object in the mock object
    const parsed = parseEntry(entry);

    const widget = mockWidget;

    expect(parsed).toEqual(widget);
  });

  it('should resolve the fields object where present', () => {
    const entry = mockEntry;
    entry.fields = {
      name: 'test name',
      description: 'test description',
    };

    //@ts-ignore - not passing the update promise object in the mock object
    const parsed = parseEntry(entry);

    const widget = mockWidget;
    widget.name = 'test name';
    widget.description = 'test description';

    expect(parsed).toEqual(widget);
  });
});
