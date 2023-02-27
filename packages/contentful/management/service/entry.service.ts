import {
  Collection,
  Entry,
  EntryProps,
  KeyValueMap,
  QueryOptions,
} from 'contentful-management';

import { getEnvironment } from '../client';

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

  async create(content_type: string, fields: { [key: string]: unknown }) {
    try {
      const environment = await getEnvironment();

      const entry: Entry = await environment.createEntry(content_type, {
        fields: {
          ...fields,
        },
      });

      return entry;
    } catch (error) {
      throw new Error(`EntryService create: ${error}`);
    }
  }

  async update(id: string, fields: { [key: string]: unknown }) {
    try {
      const entry: Entry = await this.get(id);
      entry.fields = fields;

      const updatedEntry = await entry.update();

      return updatedEntry;
    } catch (error) {
      throw new Error(`EntryService update: ${error}`);
    }
  }

  async del(id: string, query?: QueryOptions) {
    try {
      const entry = await this.get(id, query);

      await entry.delete();
    } catch (error) {
      throw new Error(`EntryService del: ${error}`);
    }
  }

  async publish(id: string, query?: QueryOptions) {
    try {
      const entry = await this.get(id, query);

      const result = await entry.publish();

      return result;
    } catch (error) {
      throw new Error(`EntryService del: ${error}`);
    }
  }

  async unPublish(id: string, query?: QueryOptions) {
    try {
      const entry = await this.get(id, query);

      const result = await entry.unpublish();

      return result;
    } catch (error) {
      throw new Error(`EntryService del: ${error}`);
    }
  }

  async locales() {
    const environment = await getEnvironment();

    const locales = await environment.getLocales();

    return locales;
  }
}
