import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Bar } from './bar.component';

describe('bar.component', () => {
  it('should display the children passed in', () => {
    const bar = (
      <Bar>
        <h1>Basic Bar</h1>
      </Bar>
    );

    render(bar);

    expect(screen.getByText('Basic Bar')).toBeDefined();
  });

  it('should display a menu burger button when menu is defined', () => {
    const bar = (
      <Bar menu={{ isFixed: false, onClick: () => {} }}>
        <h1>Basic Bar</h1>
      </Bar>
    );

    render(bar);

    expect(screen.getByLabelText('open menu')).toBeDefined();
  });

  it('should fire an event when the burger menu button is clicked', () => {
    const action = vi.fn();
    const bar = (
      <Bar menu={{ isFixed: false, onClick: () => action() }}>
        <h1>Basic Bar</h1>
      </Bar>
    );

    render(bar);

    fireEvent.click(screen.getByLabelText('open menu'));

    expect(action).toBeCalled();
  });
});
