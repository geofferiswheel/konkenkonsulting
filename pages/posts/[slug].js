/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ReactMarkdown from "react-markdown";
import { getSlugs, getPostDataBySlug } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getSlugs();
  return {
    paths,
    fallback: false,
  };
}

//TODO
//Sort out getting the content from lib/posts instead of from the file for getStaticProps()
//Sort out using our Markdown Loader
export const getStaticProps = async ({ params }) => {
  const postData = getPostDataBySlug(params.slug, [
    "title",
    "image",
    "slug",
    "content",
  ]);
  return {
    props: {
      post: {
        ...postData,
      },
    },
  };
};

export default function Post({ post }) {
  return (
    <>
      <Head></Head>
      <main>
        <div className="container">
          <Header title={post.title}></Header>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
}
