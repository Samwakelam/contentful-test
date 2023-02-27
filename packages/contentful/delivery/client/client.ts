import {
  ContentfulClientApi,
  ContentType,
  ContentTypeCollection,
  createClient,
  CreateClientParams,
  Entry,
  EntryCollection,
  LocaleCollection,
  Space,
} from 'contentful';

export class Client {
  client: ContentfulClientApi | null = null;

  constructor(params: CreateClientParams) {
    this.client = createClient(params);
  }

  async getEntry(id: string, query?: any): Promise<Entry<unknown> | null> {
    if (this.client) {
      const entry = await this.client.getEntry(id, query);

      return entry;
    }

    return null;
  }

  getSpace = async (): Promise<Space | null> => {
    if (this.client) {
      const space = await this.client.getSpace();

      return space;
    }

    return null;
  };

  // gets all content models in the space
  getContentModel = async (): Promise<ContentTypeCollection | null> => {
    if (this.client) {
      const model = await this.client.getContentTypes();

      return model;
    }

    return null;
  };

  getContentType = async (): Promise<ContentType | null> => {
    if (this.client) {
      const type = await this.client.getContentType('samTestModel');

      return type;
    }

    return null;
  };

  getEntries = async (
    query?: any
  ): Promise<EntryCollection<unknown> | null> => {
    if (this.client) {
      const entries = await this.client.getEntries(query);

      return entries;
    }
    return null;
  };

  getLocales = async (): Promise<LocaleCollection | null> => {
    if (this.client) {
      const locales = await this.client.getLocales();

      return locales;
    }
    return null;
  };
}
