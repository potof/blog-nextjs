import { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import GoogleAnalytics from "../lib/gtag";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-1536057836501643"
        async
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <GoogleAnalytics />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
