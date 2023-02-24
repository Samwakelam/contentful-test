import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserImage } from './user-image.component';

describe('user-image.component', () => {
  it('should have a user image', () => {
    const img = <UserImage src="public image" />;

    render(img);

    expect(screen.getByAltText('user image')).toBeDefined();
  });

  it('should have a default image', () => {
    const img = <UserImage src={null} />;

    render(img);

    expect(screen.getByAltText('placeholder user image')).toBeDefined();
  });
});
