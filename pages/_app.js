import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Layout } from "components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
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
