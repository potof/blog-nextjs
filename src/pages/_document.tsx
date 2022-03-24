import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  const url = "https://potof.net";
  const title = "ぽとふバーガーDX | 日記";
  const description =
    "エンジニアが自分のために旅行や買い物を記録していくブログ";

  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/logo_clear2.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
