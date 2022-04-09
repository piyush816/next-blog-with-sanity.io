import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const Post = ({ post }) => {
  const builder = imageUrlBuilder({
    projectId: "d3vkfoi0",
    dataset: "production",
  });

  function urlFor(source) {
    return builder.image(source).height(150);
  }

  return (
    <Link href={"/blogpost/" + post.slug.current}>
      <div className="post">
        <img height={150} className="post-img" src={urlFor(post.mainImage)} />
        <h3 className="post-title">{post.title}</h3>
      </div>
    </Link>
  );
};

export default Post;
