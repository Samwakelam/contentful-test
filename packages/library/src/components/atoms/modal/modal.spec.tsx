import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from './modal.component';

describe('modal.component', () => {
  it('should render the passed in children', () => {
    const modal = (
      <Modal isOpen={true} onRequestClose={() => {}}>
        <h2>Basic Modal</h2>
      </Modal>
    );

    render(modal);

    expect(screen.getByText('Basic Modal')).toBeDefined();
  });

  it('should display the modalTitle', () => {
    const modal = (
      <Modal isOpen={true} onRequestClose={() => {}} modalTitle="title">
        <h2>Basic Modal</h2>
      </Modal>
    );

    render(modal);

    expect(screen.getByLabelText('close').closest('h5')).toBeDefined();
    expect(screen.getByText('title')).toBeDefined();
  });

  it('should NOT display a modal title', () => {
    const modal = (
      <Modal isOpen={true} onRequestClose={() => {}}>
        <h2>Basic Modal</h2>
      </Modal>
    );

    render(modal);

    expect(screen.getByLabelText('close').closest('h5')).toBeNull();
  });

  it('should have a close X and request an action on click', () => {
    const action = vi.fn();
    const modal = (
      <Modal isOpen={true} onRequestClose={() => action()}>
        <h2>Basic Modal</h2>
      </Modal>
    );

    render(modal);

    expect(screen.getByLabelText('close')).toBeDefined();

    fireEvent.click(screen.getByLabelText('close'));

    expect(action).toBeCalled();
  });

  it('should not display when isOpen is false', () => {
    const modal = (
      <Modal isOpen={false} onRequestClose={() => {}} data-testId="test-id">
        <h2>Basic Modal</h2>
      </Modal>
    );

    render(modal);

    expect(screen.queryByTestId('test-id')).toBeNull();
    expect(screen.queryByText('Basic Modal')).toBeNull();
  });
});
