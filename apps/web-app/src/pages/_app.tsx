import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import withTwindApp from '@twind/next/app';

import { globalStyles, registerWidgets } from '@sam/library';
import { themeConfig, setup, tw } from '@sam/theme/twind';

import '../styles/reset.css';

function App({ Component, pageProps }: any): JSX.Element {
  setup(themeConfig);
  registerWidgets();

  return (
    <>
      <Head>
        <title>Contentful Test</title>
      </Head>
      <div
        className={tw(globalStyles)}
        style={{ height: '100%', width: '100%' }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default withTwindApp(themeConfig, App);
