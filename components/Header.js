export default function Header({ title }) {
  return <h1 className="title">{title}</h1>;
}

export function Subheader({ title }) {
  return <h2 className="subtitle">{title}</h2>;
}
