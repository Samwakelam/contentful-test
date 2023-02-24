import { HomeExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

import { tw } from '@sam/theme/twind';
import { Card } from '@sam/library';

import * as S from './Home.styles';

const applications = {
  develop: '5rbkbkojNt1sK9Od4Xpstm',
};

const Home = () => {
  //@ts-ignore
  const sdk = useSDK<HomeExtensionSDK>();

  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return (
    <div className={tw(S.HomeCss)}>
      <Card>
        <h1>
          Welcome {sdk.user.firstName} {sdk.user.lastName}
        </h1>
      </Card>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://app.contentful.com/spaces/${
          sdk.ids.space
        }/environments/${sdk.ids.environment}/apps/app_installations/${
          applications[sdk.ids.environment as keyof typeof applications]
        }/content-platform/${sdk.ids.environment}`}
      >
        <Card>
          <h2>Navigate to App</h2>
        </Card>
      </a>
    </div>
  );
};

export default Home;
