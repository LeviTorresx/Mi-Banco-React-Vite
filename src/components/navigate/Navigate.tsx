import { Link } from "react-router-dom";
import "./Navigate.css"

interface Props {
  label: string;
  to: string;
}

export default function Navigate({ label, to }: Props) {
  return (
    <div>
      <Link to={to} className="navigate-link">
        {label}
      </Link>
    </div>
  );
}
