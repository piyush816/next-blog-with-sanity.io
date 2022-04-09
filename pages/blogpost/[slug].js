import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Script from "next/script";

const BlogPost = ({ post }) => {
  const builder = imageUrlBuilder({
    projectId: "d3vkfoi0",
    dataset: "production",
  });

  function urlFor(source) {
    return builder.image(source).height(400);
  }

  return (
    <main className="container">
      <div id="fb-root"></div>
      <Script
        src={`https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0`}
      />
      <h1 className="blogpost-title">{post.title}</h1>
      <img height={400} className="blogpost-img" src={urlFor(post.mainImage)} />
      <div className="blogpost-body">
        <BlockContent
          blocks={post.body}
          projectId="d3vkfoi0"
          dataset="production"
        />
      </div>
      <div
        className="fb-comments"
        data-href={`https://developers.facebook.com/docs/plugins/comments/${post._id}`}
        data-width="100%"
        data-numposts="1"
      ></div>
    </main>
  );
};

export default BlogPost;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${slug}"]`
  );
  const url =
    "https://d3vkfoi0.api.sanity.io/v2021-10-21/data/query/production?query=";

  const res = await fetch(url + query);
  const data = await res.json();

  return { props: { post: data.result[0] } };
}
