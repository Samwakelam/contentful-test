export type Widget = {
  _template?: string;
  id: string;
  published?: boolean;
  publishedAt?: Date;
  updatedAt?: Date;
} & Record<string, any>;
