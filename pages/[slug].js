/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ReactMarkdown from "react-markdown";
import { getSortedPagesData, getPageDataBySlug } from "../lib/pages";

export async function getStaticPaths() {
  const pages = getSortedPagesData();
  const paths = pages.map((it) => ({ params: { slug: it.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const pageData = getPageDataBySlug(params.slug, [
    "title",
    "image",
    "slug",
    "content",
  ]);
  return {
    props: {
      page: {
        ...pageData,
      },
    },
  };
};

export default function Page({ page }) {
  return (
    <>
      <Head />
      <Header title={page.title}></Header>
      <ReactMarkdown>{page.content}</ReactMarkdown>
      <Footer />
    </>
  );
}
