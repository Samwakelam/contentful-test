import { ClockIcon, ClockSolidIcon, TimerIcon, TimerSolidIcon } from '../icons';

export type ClocksType = 'clock' | 'timer';

export const clocksMap: { [key in ClocksType]: () => JSX.Element } = {
  clock: ClockIcon,
  timer: TimerIcon,
};

export const clocksSolidMap: { [key in ClocksType]: () => JSX.Element } = {
  clock: ClockSolidIcon,
  timer: TimerSolidIcon,
};
