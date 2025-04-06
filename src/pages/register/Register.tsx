import { Input, Button } from "../../components";
import "./Register.css";

export default function Register() {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    e.preventDefault();
  };

  return (
    <>
      <div className="Register">
        <h1>Registro</h1>
        
          <form action="">
            <Input
              label="Nombre"
              placeholder="Ingrese nombre"
              type="text"
              onChange={onChange}
              value={""}
            />
            <Input
              label="Apellido"
              placeholder="Ingrese apellido"
              type="text"
              onChange={onChange}
              value={""}
            />

            <Input
                label="Numero de cuenta"
                placeholder="Ingrese numero de cuenta"
                type="text"
                onChange={onChange}
                value={""}
            />

            <Input
                label="Monto"
                placeholder="Ingrese monto"
                type="number"
                onChange={onChange}
                value={""}
            />

            <Button onClick={() => { alert("Registrar clinte") }}>
                <span>Registrar cliente</span>
            </Button>
          </form>
      </div>
    </>
  );
}
