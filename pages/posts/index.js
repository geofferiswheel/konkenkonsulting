import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/posts/?key=" +
      process.env.NEXT_PUBLIC_API_KEY,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "*",
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Error Fetching Content");
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((err) => {
      console.log(err);
    });

  const postCollection = data.posts.map((post) => post);

  return {
    props: {
      postCollection,
    },
  };
}

export default function Home({ postCollection }) {
  return (
    <div className="container">
      <Head>
        <title>Konken Konsulting | Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Blog Posts from Konken.ca" />
        <ol className="list">
          {postCollection.map((post) => (
            <li key={post.id} className="listItem">
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ol>

        <div className="explainer">
          <p>
            This is a static route that uses <code>getStaticProps()</code> to
            fetch the data for the page at build time. Find the file at{" "}
            <code>/pages/posts/index.js</code>
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://nextjs.org/docs/api-reference/data-fetching/get-static-props"
              target="_blank"
              rel="noreferrer"
            >
              Next.js docs for getStaticProps().
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
