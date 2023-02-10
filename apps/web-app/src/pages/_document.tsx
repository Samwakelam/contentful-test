import Document, { Html, Main, Head, NextScript } from 'next/document';
import withTwindDocument from '@twind/next/document';

import themeConfig from '../twind.config';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withTwindDocument(themeConfig, MyDocument);
