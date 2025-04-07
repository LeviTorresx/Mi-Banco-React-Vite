import "./Input.css";

interface Props {
  label: string;
  type: string;
  placeholder?: string;
  value: number | string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
}: Props) {
  return (
    <>
      <label>
        <span>{label}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
