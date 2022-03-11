/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getSortedPagesData } from "../lib/pages";

export async function getStaticPaths() {
  const pages = getSortedPagesData();
  const paths = pages.map((it) => ({ params: { slug: it.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const allPostsData = getSortedPagesData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function SinglePage({
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
      <Footer />
    </>
  );
}
