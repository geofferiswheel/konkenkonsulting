import Subheader from "@components/Header";
import Link from "next/link";

export function PostPreview({ post }) {
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

export default function Post({ title, date, image }) {
  let { file, description } = image;

  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  );
}
