export type Widget = {
  _template?: string;
  id: string;
  published?: boolean;
} & Record<string, any>;
