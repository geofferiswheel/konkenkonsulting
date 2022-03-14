/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { PostPreview } from "@components/Post";
import { getAllPostsData } from "../../lib/posts";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPostsData(),
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div className="container">
      <Head></Head>
      <main>
        <Header title="NextJS + Netlify CMS" />
        {posts.map((post) => {
          return <PostPreview post={post} key={post.key} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
