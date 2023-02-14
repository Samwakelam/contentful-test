import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

import { ContentfulApp } from '@sam/library';

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
        <Route path="/" element={<ContentfulApp />} />
      </Routes>
    </Router>
  );
};

export default Page;
