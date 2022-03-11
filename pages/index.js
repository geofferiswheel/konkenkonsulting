import Head from "next/head";
import Script from "next/script";
import { Component } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  let { title, cats } = attributes;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={title} />
        <HomeContent />
      </main>

      <Footer />
    </>
  );
}
