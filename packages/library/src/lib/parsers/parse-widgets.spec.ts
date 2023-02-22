import { describe, it, expect } from 'vitest';

import { RegionCode } from '@sam/types';

import { mockWidget } from '../../../__synthetics__/widget.mock';

import { parseWidget } from './parse-widgets.helper';

describe('parseWidget', () => {
  it('should return a widget with the correct locale values (US)', () => {
    const regionCode = 'en-US' as RegionCode;
    const widget = mockWidget;
    widget.description = { 'en-US': 'American English' };

    const parsed = parseWidget(widget, regionCode, regionCode);

    expect(parsed).toEqual({
      id: 'test-entry-id',
      description: 'American English',
    });
  });

  it('should return a widget with the correct locale values (GB)', () => {
    const regionCode = 'en-GB' as RegionCode;
    const defaultCode = 'en-US' as RegionCode;
    const widget = mockWidget;
    widget.description = {
      'en-US': 'American English',
      'en-GB': 'British English',
    };

    const parsed = parseWidget(widget, regionCode, defaultCode);

    expect(parsed).toEqual({
      id: 'test-entry-id',
      description: 'British English',
    });
  });

  it('should return the default region when the first region is not available', () => {
    const regionCode = 'en-GB' as RegionCode;
    const defaultCode = 'en-US' as RegionCode;
    const widget = mockWidget;
    widget.description = { 'en-US': 'American English' };

    const parsed = parseWidget(widget, regionCode, defaultCode);

    expect(parsed).toEqual({
      id: 'test-entry-id',
      description: 'American English',
    });
  });

  it('should return the value of the property where there is no localisation', () => {
    const regionCode = 'en-GB' as RegionCode;
    const defaultCode = 'en-US' as RegionCode;
    const widget = mockWidget;
    widget.description = 'British English';

    const parsed = parseWidget(widget, regionCode, defaultCode);

    expect(parsed).toEqual({
      id: 'test-entry-id',
      description: 'British English',
    });
  });
});
