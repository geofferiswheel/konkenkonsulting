import Head from "next/head";

import { fetchEntries } from "../lib/contentful";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Contentful from "@components/Contentful";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next + Contentful Starter" />
        <div className="post-container">
          {posts.map((p) => {
            return <Contentful post={p} />;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

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
