import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { setup, tw } from 'twind';
import withTwindApp from '@twind/next/app';

import { globalStyles } from '@sam/library';

import { registerWidgets } from '../../lib/parsers/parse-widgets';
import themeConfig from '../twind.config';

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
