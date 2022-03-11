/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((it) => ({ params: { slug: it.slug } }));
  return {
    paths,
    fallback: false,
  };
}

//TODO
//Sort out getting the content from lib/posts instead of from the file for getStaticProps()
//Sort out using our Markdown Loader
export const getStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function SinglePost({
  title,
  dateString,
  description,
  tags,
  author,
  source,
}) {
  return (
    <>
      <Head />
      <Header />
      {title}
      <Footer />
    </>
  );
}
