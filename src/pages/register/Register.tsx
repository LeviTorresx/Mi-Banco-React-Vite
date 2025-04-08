import { useState } from "react";
import { Input, Button } from "../../components";
import Customer from "../../types/Customers";
import "./Register.css";
import Navigate from "../components/Navigate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/Strore";
import { addCustomer } from "../../redux/slices/CustomersSlice";

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const [customers, setCustomers] = useState<Customer>({
    accountNumber: "",
    firstName: "",
    lastName: "",
    balance: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setCustomers((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Cliente registrado");

    console.log(customers);

    dispatch(addCustomer(customers));

    setCustomers({
      accountNumber: "",
      firstName: "",
      lastName: "",
      balance: 0,
    });
  };

  return (
    <>
      <div className="Register">
        <h1>Registro</h1>

        <form onSubmit={onSubmit}>
          <Input
            label="Nombre"
            placeholder="Ingrese nombre"
            type="text"
            name="firstName"
            onChange={onChange}
            value={customers.firstName}
          />
          <Input
            label="Apellido"
            placeholder="Ingrese apellido"
            type="text"
            name="lastName"
            onChange={onChange}
            value={customers.lastName}
          />

          <Input
            label="Numero de cuenta"
            placeholder="Ingrese numero de cuenta"
            type="text"
            name="accountNumber"
            onChange={onChange}
            value={customers.accountNumber}
          />

          <Input
            label="Monto"
            placeholder="Ingrese monto"
            type="number"
            name="balance"
            onChange={onChange}
            value={customers.balance}
          />

          <Button type="submit">
            <span>Registrar cliente</span>
          </Button>
        </form>
        <div className="navigate-container">
          <Navigate label="Volver" to="/" />
          <Navigate label="Clientes" to="/consultar-clientes" />
        </div>
      </div>
    </>
  );
}
