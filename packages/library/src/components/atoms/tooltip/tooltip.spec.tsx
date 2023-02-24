import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import {
  resolveTipDirection,
  resolveTipSize,
  Tooltip,
} from './tooltip.component';
import { DirectionType, SizeType } from './tooltip.definition';

describe('tooltip.component', () => {
  it('should wrap the children', () => {
    const tooltip = (
      <Tooltip content="Basic Tip">
        <p>Paragraph</p>
      </Tooltip>
    );

    render(tooltip);

    expect(screen.getByText('Paragraph')).toBeDefined();
  });

  it.skip('should display tooltip on hover', () => {
    const tooltip = (
      <Tooltip content="Basic Tip">
        <p>Paragraph</p>
      </Tooltip>
    );

    render(tooltip);

    fireEvent.mouseOver(screen.getByText('Paragraph'));

    expect(screen.getByText('Basic Tip')).toBeDefined();
  });
});

describe.skip('resolveTipDirection', () => {
  it('should return Top css properties', () => {
    const resolve = resolveTipDirection(DirectionType.TOP);
    console.log('resolve: ', resolve);

    expect(resolve).toEqual('');
  });
});

describe('resolveTipSize', () => {
  it('should return size small', () => {
    const resolve = resolveTipSize(SizeType.S);

    expect(resolve).toEqual('5rem');
  });

  it('should return size small', () => {
    const resolve = resolveTipSize(SizeType.M);

    expect(resolve).toEqual('7rem');
  });

  it('should return size small', () => {
    const resolve = resolveTipSize(SizeType.L);

    expect(resolve).toEqual('9rem');
  });

  it('should return size small', () => {
    const resolve = resolveTipSize(SizeType.XL);

    expect(resolve).toEqual('13rem');
  });

  it('should return unset when undefined', () => {
    const resolve = resolveTipSize(undefined);

    expect(resolve).toEqual('unset');
  });
});
