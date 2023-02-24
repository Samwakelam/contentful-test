import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from './card.component';

describe('card.component', () => {
  it('should render the children passed in', () => {
    const card = (
      <Card>
        <h1>Basic Card</h1>
      </Card>
    );

    render(card);

    expect(screen.getByText('Basic Card')).toBeDefined();
  });
});
