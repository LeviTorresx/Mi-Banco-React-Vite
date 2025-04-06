import "./Section.css";

interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}
export default function BentoSection({ title, description, children }: Props) {
  return (
    <div className="container-section">
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      <div>{children}</div>
    </div>
  );
}
