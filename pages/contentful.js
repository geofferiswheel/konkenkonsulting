import Head from "next/head";

import { fetchEntries } from "../lib/contentful";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Contentful from "@components/Contentful";

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <Header title="Next + Contentful Starter" />
          <div className="post-container">
            {posts.map((p, index) => {
              let key = `contentful-post-${index}`;
              return <Contentful post={p} key={key} />;
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
