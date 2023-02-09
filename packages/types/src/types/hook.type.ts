import React from 'react';

type EventHandler<E extends React.SyntheticEvent<any, Event>> = (
  event: E,
  callback: () => void
) => void;

export interface Hook<
  S extends Record<string, unknown>,
  H extends Record<string, EventHandler<any>>
> {
  state: S;
  handlers: H;
}
