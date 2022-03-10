import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";

import config from "../cms/config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
    }),
  {
    ssr: false,
    loading: () => <h1>Loading</h1>,
  }
);

const AdminPage = () => {
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <CMS />
    </>
  );
};

export default AdminPage;
