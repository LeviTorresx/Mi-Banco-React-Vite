import { useState } from "react";
import { Input, Button, Navigate, FeedbackAlert } from "../../components";
import Customer from "../../types/Customers";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Strore";
import { addCustomer } from "../../redux/slices/CustomersSlice";

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const customers = useSelector((state: RootState) => state.customers);

  const [alert, setAlert] = useState({
    message: "",
    severity: "success" as "success" | "error" | "info" | "warning",
    open: false,
  });

  const [customer, setCustomers] = useState<Customer>({
    accountNumber: "",
    firstName: "",
    lastName: "",
    balance: 0,
  });

  const findCustomer = (accountNumber: string) => {
    const customer = customers.find((c) => c.accountNumber === accountNumber);
    return customer;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setCustomers((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, accountNumber, balance } = customer;

    if (!firstName || !lastName || !accountNumber || balance <= 0) {
      setAlert((prevState) => {
        return {
          ...prevState,
          message: "Por favor complete todos los campos",
          severity: "error",
          open: true,
        };
      });
      return;
    }

    if (accountNumber.length < 4) {
      setAlert((prevState) => {
        return {
          ...prevState,
          message: "El numero de cuenta debe tener al menos 4 digitos",
          severity: "error",
          open: true,
        };
      });
      return;
    }

    if (findCustomer(accountNumber)) {
      setAlert((prevState) => {
        return {
          ...prevState,
          message: "El cliente ya existe, por favor ingrese un numero distinto",
          severity: "error",
          open: true,
        };
      });

      return;
    }

    if (balance < 10000) {
      setAlert((prevState) => {
        return {
          ...prevState,
          message: "El monto minimo es de $ 10,000",
          severity: "error",
          open: true,
        };
      });
      return;
    }

    dispatch(addCustomer(customer));

    setAlert({
      message: "Cliente registrado exitosamente",
      severity: "success",
      open: true,
    });

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
            value={customer.firstName}
          />
          <Input
            label="Apellido"
            placeholder="Ingrese apellido"
            type="text"
            name="lastName"
            onChange={onChange}
            value={customer.lastName}
          />

          <Input
            label="Numero de cuenta"
            placeholder="Ingrese numero de cuenta"
            type="text"
            name="accountNumber"
            onChange={onChange}
            value={customer.accountNumber}
          />

          <Input
            label="Monto"
            placeholder="Ingrese monto"
            type="number"
            name="balance"
            onChange={onChange}
            value={customer.balance}
          />

          <Button type="submit">
            <span>Registrar cliente</span>
          </Button>

          {alert.open && (
            <FeedbackAlert
              open={alert.open}
              onClose={() => {
                setAlert((prevState) => {
                  return { ...prevState, open: false };
                });
              }}
              message={alert.message}
              severity={alert.severity}
            />
          )}
        </form>
        <div className="navigate-container">
          <Navigate label="Volver" to="/" />
          <Navigate label="Clientes" to="/consultar-clientes" />
        </div>
      </div>
    </>
  );
}
