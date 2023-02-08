import {
  BinIcon,
  BinSolidIcon,
  BlogIcon,
  BlogSolidIcon,
  CommentIcon,
  CommentSolidIcon,
  CopyIcon,
  CopySolidIcon,
  DownloadIcon,
  FilterIcon,
  FilterSolidIcon,
  PencilIcon,
  PencilSolidIcon,
  SettingsIcon,
  SettingsSolidIcon,
  ToggleIcon,
  ToggleSolidIcon,
  UploadIcon,
} from '../icons';

export type UtilsType =
  | 'bin'
  | 'blog'
  | 'comment'
  | 'copy'
  | 'download'
  | 'filter'
  | 'pencil'
  | 'settings'
  | 'toggle'
  | 'upload';

export const utilsMap: { [key in UtilsType]: () => JSX.Element } = {
  bin: BinIcon,
  blog: BlogIcon,
  comment: CommentIcon,
  copy: CopyIcon,
  download: DownloadIcon,
  filter: FilterIcon,
  pencil: PencilIcon,
  settings: SettingsIcon,
  toggle: ToggleIcon,
  upload: UploadIcon,
};

export const utilsSolidMap: { [key in UtilsType]: () => JSX.Element } = {
  bin: BinSolidIcon,
  blog: BlogSolidIcon,
  comment: CommentSolidIcon,
  copy: CopySolidIcon,
  download: DownloadIcon,
  filter: FilterSolidIcon,
  pencil: PencilSolidIcon,
  settings: SettingsSolidIcon,
  toggle: ToggleSolidIcon,
  upload: UploadIcon,
};
