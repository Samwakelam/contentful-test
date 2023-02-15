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
    const environment = await getEnvironment();

    const entry = await environment.getEntry(id, query);

    return entry;
  }

  async create() {
    const environment = await getEnvironment();
  }

  async update() {
    const environment = await getEnvironment();
  }

  async del() {
    const environment = await getEnvironment();
  }

  async publish() {
    const environment = await getEnvironment();
  }
}
