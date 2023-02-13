import { PageExtensionSDK } from '@contentful/app-sdk';
import { Paragraph } from '@contentful/f36-components';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Page = () => {
  //@ts-ignore
  const sdk = useSDK<PageExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Paragraph>
              Hello Sam Page Component (AppId: {sdk.ids.app})
            </Paragraph>
          }
        />
      </Routes>
    </Router>
  );
};

export default Page;
