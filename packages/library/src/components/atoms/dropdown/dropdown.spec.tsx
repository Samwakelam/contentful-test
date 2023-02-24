import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Dropdown, resolveActiveStyle } from './dropdown.component';
import {
  ActiveStyleType,
  MenuItemProps,
  TriggerType,
} from './dropdown.definition';
import { Button } from '../button';

describe('dropdown.component', () => {
  it('should show the correct trigger button - V_TRIMMED', () => {
    const menuItems: MenuItemProps[] = [];
    const dropdown = (
      <Dropdown
        trigger={{ type: TriggerType.V_TRIMMED }}
        menuItems={menuItems}
      />
    );

    render(dropdown);

    expect(screen.getByLabelText('trimmed vertical menu')).toBeDefined();
  });

  it('should show the correct trigger button - SELECTED', () => {
    const menuItems: MenuItemProps[] = [];
    const dropdown = (
      <Dropdown
        trigger={{ type: TriggerType.SELECTED }}
        menuItems={menuItems}
      />
    );

    render(dropdown);

    expect(screen.getByLabelText('more')).toBeDefined();
  });

  it('should show the correct trigger button - CUSTOM', () => {
    const menuItems: MenuItemProps[] = [];
    const dropdown = (
      <Dropdown
        trigger={{
          type: TriggerType.CUSTOM,
          customTrigger: (
            <Button icon={{ icon: 'plus', ariaLabel: 'custom trigger' }} />
          ),
        }}
        menuItems={menuItems}
      />
    );

    render(dropdown);

    expect(screen.getByLabelText('custom trigger')).toBeDefined();
  });

  it('should show the menu items passed in', () => {
    const menuItems: MenuItemProps[] = [{ text: 'item-1' }];
    const dropdown = (
      <Dropdown
        trigger={{ type: TriggerType.V_TRIMMED }}
        menuItems={menuItems}
      />
    );

    render(dropdown);

    expect(screen.getByText('item-1')).toBeDefined();
  });

  it('should show the multiple menu items passed in', () => {
    const menuItems: MenuItemProps[] = [
      { text: 'item-1' },
      { text: 'item-2' },
      { text: 'item-3' },
    ];
    const dropdown = (
      <Dropdown
        trigger={{ type: TriggerType.V_TRIMMED }}
        menuItems={menuItems}
      />
    );

    render(dropdown);

    expect(screen.getByText('item-1')).toBeDefined();
    expect(screen.getByText('item-2')).toBeDefined();
    expect(screen.getByText('item-3')).toBeDefined();
  });
});

describe('resolveActiveStyle', () => {
  it('should return css object for bold font', () => {
    const resolve = resolveActiveStyle([ActiveStyleType.BOLD], true);

    expect(resolve).toEqual(['font-bold']);
  });
});
