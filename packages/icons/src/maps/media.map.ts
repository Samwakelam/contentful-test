import {
  DesktopIcon,
  EyeOffIcon,
  EyeOffSolidIcon,
  EyeOnIcon,
  EyeOnSolidIcon,
  FullScreenIcon,
  MicOffIcon,
  MicOffSolidIcon,
  MicOnIcon,
  MicOnSolidIcon,
  MobileIcon,
  NotificationOffIcon,
  NotificationOffSolidIcon,
  NotificationOnIcon,
  NotificationOnSolidIcon,
  PauseIcon,
  PauseSolidIcon,
  PlayIcon,
  PlaySolidIcon,
  SmallScreenIcon,
  SpeakerOffIcon,
  SpeakerOffSolidIcon,
  SpeakerOnIcon,
  SpeakerOnSolidIcon,
  TabletIcon,
} from '../icons';

export type MediaType =
  | 'desktop'
  | 'eye-off'
  | 'eye-on'
  | 'full-screen'
  | 'mic-off'
  | 'mic-on'
  | 'mobile'
  | 'notification-off'
  | 'notification-on'
  | 'pause'
  | 'play'
  | 'small-screen'
  | 'speaker-off'
  | 'speaker-on'
  | 'tablet';

export const mediaMap: { [key in MediaType]: () => JSX.Element } = {
  desktop: DesktopIcon,
  'eye-off': EyeOffIcon,
  'eye-on': EyeOnIcon,
  'full-screen': FullScreenIcon,
  'mic-off': MicOffIcon,
  'mic-on': MicOnIcon,
  mobile: MobileIcon,
  'notification-off': NotificationOffIcon,
  'notification-on': NotificationOnIcon,
  pause: PauseIcon,
  play: PlayIcon,
  'small-screen': SmallScreenIcon,
  'speaker-off': SpeakerOffIcon,
  'speaker-on': SpeakerOnIcon,
  tablet: TabletIcon,
};

export const mediaSolidMap: { [key in MediaType]: () => JSX.Element } = {
  desktop: DesktopIcon,
  'eye-off': EyeOffSolidIcon,
  'eye-on': EyeOnSolidIcon,
  'full-screen': FullScreenIcon,
  'mic-off': MicOffSolidIcon,
  'mic-on': MicOnSolidIcon,
  mobile: MobileIcon,
  'notification-off': NotificationOffSolidIcon,
  'notification-on': NotificationOnSolidIcon,
  pause: PauseSolidIcon,
  play: PlaySolidIcon,
  'small-screen': SmallScreenIcon,
  'speaker-off': SpeakerOffSolidIcon,
  'speaker-on': SpeakerOnSolidIcon,
  tablet: TabletIcon,
};
