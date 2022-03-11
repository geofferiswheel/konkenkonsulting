/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { fetchPageContent } from "../lib/pages";

export async function getStaticPaths() {
  const paths = await fetchPageContent().map((it) => it.slug);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.post;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });
  const mdxSource = await renderToString(content, { components, scope: data });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags,
      author: data.author,
      source: mdxSource,
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
