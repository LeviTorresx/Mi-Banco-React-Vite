import "./Button.css"

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" ;
  onClick?: () => void;
}

export default function Button({ children, onClick, type }: Props) {
  return (
    <>
      <button onClick={onClick} type={type} className="button" > {children} </button>
    </>
  );
}
