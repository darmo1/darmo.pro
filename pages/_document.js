import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <title>Danilo Arturo Morales | Darmo10</title>
          <meta
            name="title"
            content="Danilo Arturo Morales  | Darmo10
"
          />
          <meta
            name="description"
            content="Front-end developer , JavaScript enthusiast and Materials Engineer"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://darmo.pro/" />
          <meta
            property="og:title"
            content="Danilo Arturo Morales  | Darmo10
"
          />
          <meta
            property="og:description"
            content="Front-end developer , JavaScript enthusiast and Materials Engineer"
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://darmo.pro/" />
          <meta
            property="twitter:title"
            content="Danilo Arturo Morales  | Darmo10
"
          />
          <meta
            property="twitter:description"
            content="Front-end developer , JavaScript enthusiast and Materials Engineer"
          />
          <meta property="twitter:image" content=""></meta>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
