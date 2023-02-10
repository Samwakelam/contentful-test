import {
  ContentType,
  ContentTypeCollection,
  createClient,
  Entry,
  EntryCollection,
  Space,
} from 'contentful';

const client = createClient({
  space: process.env.CF_SPACE_ID || '',
  accessToken: process.env.CF_DELIVERY_API || '',
  environment: process.env.CF_ENVIRONMENT || 'develop',
});

export const getEntry = async (
  id: string,
  query?: any
): Promise<Entry<unknown>> => {
  const entry = await client.getEntry(id, query);

  return entry;
};

export const getSpace = async (): Promise<Space> => {
  const space = await client.getSpace();

  return space;
};

// gets all content models in the space
export const getContentModel = async (): Promise<ContentTypeCollection> => {
  const model = await client.getContentTypes();

  return model;
};

export const getContentType = async (): Promise<ContentType> => {
  const type = await client.getContentType('samTestModel');

  return type;
};

export const getEntries = async (
  query?: any
): Promise<EntryCollection<unknown>> => {
  const entries = await client.getEntries(query);

  return entries;
};

export const getLocales = async () => {
  const locales = await client.getLocales();

  return locales;
};
