import { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setup, tw } from 'twind';
import { css } from 'twind/css';

import { themeConfig } from '../src/styles/twind.config';
import { globalStyles } from '../src/styles/global';

export default ({ children }: { children: ReactNode }) => {
  setup(themeConfig);

  return <div className={tw(css(globalStyles))}>{children}</div>;
};
