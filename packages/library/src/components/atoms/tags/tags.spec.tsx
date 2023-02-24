import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Tags } from './tags.component';
import { TagColour } from './tags.definition';

describe('tags.component', () => {
  it('should display tag value', () => {
    const tags = (
      <Tags tags={[{ value: 'tag', showTag: true, colour: TagColour.BLUE }]} />
    );

    render(tags);

    expect(screen.getByText('tag')).toBeDefined();
  });

  it('should NOT display tag value', () => {
    const tags = (
      <Tags tags={[{ value: 'tag', showTag: false, colour: TagColour.BLUE }]} />
    );

    render(tags);

    expect(screen.queryByText('tag')).toBeNull();
  });
});
