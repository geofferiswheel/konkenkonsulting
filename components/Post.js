import Subheader from "@components/Header";
import Link from "next/link";

export function PostPreview({ post }) {
  console.log("Preview", post);
  return (
    <div className="post-container">
      <Subheader title={post.title} />
      <Link href={post.url}>See here</Link>
    </div>
  );
}

export default function Post({ post }) {
  console.log("Post", post);
  return <></>;
}
