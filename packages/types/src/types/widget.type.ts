export type Widget = {
  _template?: string;
  id: string;
  published?: boolean;
  publishedAt?: string;
  updatedAt?: string;
} & Record<string, any>;
