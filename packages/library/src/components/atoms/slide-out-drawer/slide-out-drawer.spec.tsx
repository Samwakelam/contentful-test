import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { SlideOutDrawer } from './slide-out-drawer.component';

describe('slide-out-drawer.component', () => {
  it('should render the children passed in', () => {
    const slideOutDrawer = (
      <SlideOutDrawer isOpen={true} onRequestClose={() => {}}>
        <h2>Basic Drawer</h2>
      </SlideOutDrawer>
    );

    render(slideOutDrawer);

    expect(screen.getByText('Basic Drawer')).toBeDefined();
  });

  it('should have a back button and should close on request', () => {
    const action = vi.fn();
    const slideOutDrawer = (
      <SlideOutDrawer isOpen={true} onRequestClose={() => action()}>
        <h2>Basic Drawer</h2>
      </SlideOutDrawer>
    );

    render(slideOutDrawer);

    expect(screen.getByLabelText('back')).toBeDefined();

    fireEvent.click(screen.getByLabelText('back'));

    expect(action).toBeCalled();
  });

  it('should not have a drawer title', () => {
    const slideOutDrawer = (
      <SlideOutDrawer isOpen={true} onRequestClose={() => {}}>
        <h2>Basic Drawer</h2>
      </SlideOutDrawer>
    );

    render(slideOutDrawer);

    expect(screen.getByLabelText('back').closest('h5')).toBeNull();
  });

  it('should have a drawer title', () => {
    const slideOutDrawer = (
      <SlideOutDrawer
        isOpen={true}
        onRequestClose={() => {}}
        drawerTitle="title"
      >
        <h2>Basic Drawer</h2>
      </SlideOutDrawer>
    );

    render(slideOutDrawer);

    expect(screen.getByLabelText('back').closest('h5')).toBeDefined();
    expect(screen.getByText('title')).toBeDefined();
  });

  it('should not be defined when isOpen is false', () => {
    const slideOutDrawer = (
      <SlideOutDrawer
        isOpen={false}
        onRequestClose={() => {}}
        drawerTitle="title"
        data-testId="test-id"
      >
        <h2>Basic Drawer</h2>
      </SlideOutDrawer>
    );

    render(slideOutDrawer);

    expect(screen.queryByTestId('test-id')).toBeNull();
  });
});
