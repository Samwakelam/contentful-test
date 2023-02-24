import NextDocument, { Html, Main, Head, NextScript } from 'next/document';
import withTwindDocument from '@twind/next/document';

import { themeConfig } from '@sam/theme/twind';

class Document extends NextDocument {
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

export default withTwindDocument(themeConfig, Document);
