import { init, KnownSDK } from '@contentful/app-sdk';
import {
  createClient,
  ClientAPI,
  Space,
  Environment,
} from 'contentful-management';

const getClient = async (): Promise<{ sdk: KnownSDK; cma: ClientAPI }> => {
  const promise = new Promise<{ sdk: KnownSDK; cma: ClientAPI }>((resolve) => {
    init((sdk) => {
      // See project Readme for reason for using the cma object (Step 6)
      const cma: ClientAPI = createClient({ apiAdapter: sdk.cmaAdapter });

      resolve({ sdk, cma });
    });
  });
  return promise;
};

export const getEnvironment = async () => {
  const { sdk, cma } = await getClient();

  const space: Space = await cma.getSpace(sdk.ids.space);
  const environment: Environment = await space.getEnvironment(
    sdk.ids.environment
  );

  return environment;
};
