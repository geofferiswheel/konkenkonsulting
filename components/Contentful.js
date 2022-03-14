export default function Contentful({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>

      <div className="text">
        <h3>{post.date.substring(0, 10)}</h3>
        <div className="description">{post.description}</div>
      </div>
    </div>
  );
}
