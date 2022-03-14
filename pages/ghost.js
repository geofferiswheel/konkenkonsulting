import { fetchEntries, getGhostUrls } from "../lib/ghost";
import { GhostPreview } from "@components/Ghost";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticProps() {
  const posts = await fetchEntries();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default function Ghost({ posts }) {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <Header title="NextJS + Ghost CMS API" />
          <div className="post-container">
            {posts.map((post) => {
              return <GhostPreview post={post} key={post.id} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
