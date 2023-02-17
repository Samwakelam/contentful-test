/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import { RegionCode } from '@sam/types';

import { WebApp } from '../../src/views/web-app';
import { Card } from '../../src';

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
    <Card>
      <h1>Test Card</h1>
    </Card>
  </WebApp>
);
