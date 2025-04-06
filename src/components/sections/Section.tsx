import "./Section.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description?: string;
  route: string;
  children?: React.ReactNode;
}
export default function BentoSection({
  title,
  description,
  children,
  route,
}: Props) {
  return (
    <Link to={route} className="container-section">
      <div>{children}</div>
      <div>
        <h2 className="title">{title}</h2>
        <h3 className="description">{description}</h3>
      </div>
    </Link>
  );
}
