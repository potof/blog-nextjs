import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GoogleAnalytics from "../lib/gtag";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
