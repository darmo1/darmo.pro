import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3WF9QQKB1Z"
      ></script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3WF9QQKB1Z');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
