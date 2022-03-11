import "@styles/globals.css";
import Script from "next/script";

function Application({ Component, pageProps }) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
