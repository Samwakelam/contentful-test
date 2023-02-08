import {
  CameraIcon,
  CameraSolidIcon,
  FlagIcon,
  FlagSolidIcon,
  ImageIcon,
  ImageSolidIcon,
  OrderIcon,
  OrderSolidIcon,
  ThumbDownIcon,
  ThumbDownSolidIcon,
  ThumbUpIcon,
  ThumbUpSolidIcon,
} from '../icons';

export type MiscType =
  | 'camera'
  | 'flag'
  | 'image'
  | 'order'
  | 'thumb-down'
  | 'thumb-up';

export const miscMap: { [key in MiscType]: () => JSX.Element } = {
  camera: CameraIcon,
  flag: FlagIcon,
  image: ImageIcon,
  order: OrderIcon,
  'thumb-down': ThumbDownIcon,
  'thumb-up': ThumbUpIcon,
};

export const miscSolidMap: { [key in MiscType]: () => JSX.Element } = {
  camera: CameraSolidIcon,
  flag: FlagSolidIcon,
  image: ImageSolidIcon,
  order: OrderSolidIcon,
  'thumb-down': ThumbDownSolidIcon,
  'thumb-up': ThumbUpSolidIcon,
};
