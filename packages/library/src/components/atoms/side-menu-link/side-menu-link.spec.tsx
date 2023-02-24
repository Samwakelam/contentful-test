import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SlideMenuLink } from './side-menu-link.component';

describe('side-menu-link.component', () => {
  it('should display the label text', () => {
    const href = 'https://test.com';
    const sideLink = (
      <SlideMenuLink label="link" href={href} isActive={false} />
    );

    render(sideLink);

    expect(screen.getByText('link')).toBeDefined();
  });

  it('should have the correct href', () => {
    const href = 'https://test.com';
    const sideLink = (
      <SlideMenuLink label="link" href={href} isActive={false} />
    );

    render(sideLink);

    expect(screen.getByText('link').closest('a')).toHaveProperty(
      'href',
      `${href}/`
    );
  });
});
