import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';

import { Button } from '../button';

import { Placeholder } from './placeholder.component';

describe('placeholder.component', () => {
  it('should display the children passed in', () => {
    const placeholder = (
      <Placeholder>
        <Button>Button</Button>
      </Placeholder>
    );

    render(placeholder);

    expect(screen.getByText('Button')).toBeDefined();
  });
});
