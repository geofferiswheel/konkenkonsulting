/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticPaths() {
  const data = await fetch(
    process.env.API_URL + "/posts/?key=" + process.env.API_KEY,
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

  const paths = data.posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await fetch(
    process.env.API_URL + `/posts/slug/${slug}/?key=` + process.env.API_KEY,
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

  const posts = data.posts.map((post) => post);

  const post = {
    slug,
    title: posts[0].title,
    feature_image: posts[0].feature_image,
    html: posts[0].html,
  };

  return {
    props: {
      post,
    },
  };
}

export default function PostSingle({ post }) {
  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`A profile page for ${post.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <h1>{post.title}</h1>
        <img
          src={post.feature_image}
          alt={post.title}
          height="100"
          width="100"
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <div className="explainer">
          <p>
            This is a dynamic page route generated with{" "}
            <code>getStaticPaths()</code> in{" "}
            <code>/pages/pokemon/[name].js</code>
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://nextjs.org/docs/api-reference/data-fetching/get-static-paths"
              target="_blank"
              rel="noreferrer"
            >
              Next.js docs for getStaticPaths().
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
