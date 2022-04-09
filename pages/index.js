import Head from "next/head";
import Image from "next/image";
import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h2 className="heading">Latest Posts</h2>
        <div className="feeds">
          {posts.length > 0 &&
            posts.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = `*[_type == "post"]`;
  const url =
    "https://d3vkfoi0.api.sanity.io/v2021-10-21/data/query/production?query=";

  const res = await fetch(url + query);
  const data = await res.json();

  return { props: { posts: data.result } };
}
