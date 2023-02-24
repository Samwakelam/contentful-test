/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { setup, themeConfig, css, tw } from '@sam/theme/twind';

import { globalStyles } from '../src/styles/global';

export default ({ children }: { children: ReactNode }) => {
  setup(themeConfig);

  return <div className={tw(css(globalStyles))}>{children}</div>;
};
