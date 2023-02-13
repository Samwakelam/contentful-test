/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import { WebApp } from '../../src/views/web-app';

import { RegionCode } from '@sam/types';

export default () => (
  <WebApp
    regions={[
      {
        name: 'United Kingdom',
        iso: RegionCode['en-GB'],
      },
    ]}
    dispatches={{ selectedRegion: () => {} }}
  >
    <h1>Test Card</h1>
  </WebApp>
);
