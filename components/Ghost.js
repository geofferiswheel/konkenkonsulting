import Subheader from "@components/Header";
import Link from "next/link";

export function GhostPreview({ post }) {
  return (
    <div className="post-container">
      <Subheader title={post.title} />
      <Link href={post.url} passHref>
        <a target="_blank" rel="noopener noreferrer">
          See here
        </a>
      </Link>
    </div>
  );
}

export default function Ghost({ post }) {
  return <></>;
}
