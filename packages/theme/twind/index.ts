import { Configuration, setup as twindSetup } from 'twind';

export { css, theme, keyframes } from 'twind/css';
export { tw, apply } from 'twind';
export type { CSSRules, Directive, Theme } from 'twind';

export * from './twind.config';

export const setup = (options: Configuration) => twindSetup(options);
