import {
  Collection,
  Entry,
  EntryProps,
  KeyValueMap,
  QueryOptions,
} from 'contentful-management';
import { getEnvironment } from '../client/client';

export class EntryService {
  constructor() {}

  async getAll(query?: QueryOptions): Promise<Entry[]> {
    const environment = await getEnvironment();

    const entries: Collection<
      Entry,
      EntryProps<KeyValueMap>
    > = await environment.getEntries(query);

    return entries.items;
  }

  async get(id: string, query?: QueryOptions): Promise<Entry> {
    try {
      const environment = await getEnvironment();

      const entry = await environment.getEntry(id, query);

      return entry;
    } catch (error) {
      throw new Error(`EntryService get: ${error}`);
    }
  }

  async create(model: {
    name: { 'en-US': string };
    description: { 'en-US': string; 'en-GB'?: string };
  }) {
    try {
      const environment = await getEnvironment();

      const data = {
        fields: {
          ...model,
        },
      };

      await environment.createEntry('samTestModel', data);
    } catch (error) {
      throw new Error(`EntryService create: ${error}`);
    }
  }

  async update() {
    const environment = await getEnvironment();
  }

  async del(id: string, query?: QueryOptions) {
    try {
      const entry = await this.get(id, query);

      await entry.delete();
    } catch (error) {
      throw new Error(`EntryService del: ${error}`);
    }
  }

  async publish() {
    const environment = await getEnvironment();
  }

  async locales() {
    const environment = await getEnvironment();

    const locales = await environment.getLocales();

    return locales;
  }
}
