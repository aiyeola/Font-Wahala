import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { Layout } from 'components/layouts';
import Fonts from 'components/Fonts';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      {Component.requireAuth ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
