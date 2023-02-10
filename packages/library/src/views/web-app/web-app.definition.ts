import { ReactElement } from 'react';

import { DispatchesType, Region, RegionCode } from '@sam/types';

export type WebAppProps = {
  regions: Region[];
  children: ReactElement;
  dispatches: DispatchesType;
};

export type WebAppState = {
  activeRegion: RegionCode;
};

export type WebAppHandlers = {
  onRegionSelect: (region: RegionCode) => void;
};

export type WebAppContextProps = {
  state: WebAppState;
  handlers: WebAppHandlers;
};
