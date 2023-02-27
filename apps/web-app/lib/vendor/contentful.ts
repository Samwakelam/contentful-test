import { Client } from '@sam/contentful/delivery';

export const contentfulClient = new Client({
  space: process.env.CF_SPACE_ID || '',
  accessToken: process.env.CF_DELIVERY_API || '',
  environment: process.env.CF_ENVIRONMENT || 'develop',
});
