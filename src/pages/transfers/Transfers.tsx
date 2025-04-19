import { useState } from "react";
import { Button, FeedbackAlert, Input } from "../../components";
import "./Transfers.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import Customer from "../../types/Customers";
import ConfirmTransferModal from "./modal/ConfirmTransferModal";

export default function Transfers() {
  const customers = useSelector((state: RootState) => state.customers);
  const [openModal, setOpenModal] = useState(false);

  const [transferData, setTransferData] = useState({
    amount: 0,
    destinationAccount: "",
    name: "",
    date: new Date().toLocaleString("es-CO", {
      dateStyle: "long",
      timeStyle: "short",
    }),
  });

  const [logger, setLogger] = useState({
    firstName: "",
    accountNumber: "",
  });

  const [alert, setAlert] = useState({
    message: "",
    severity: "success" as "success" | "error" | "info" | "warning",
    open: false,
  });

  const [customer, setCustomer] = useState<Customer>({
    accountNumber: "",
    firstName: "",
    lastName: "",
    balance: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogger((prev) => ({ ...prev, [name]: value }));
  };

  const onTransferChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransferData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const onSubmit = () => {
    const { firstName, accountNumber } = logger;

    if (!firstName || !accountNumber) {
      setAlert({
        message: "Llene todos los campos para validar el cliente",
        severity: "error",
        open: true,
      });
      return;
    }

    if (accountNumber.length < 4) {
      setAlert({
        message: "El número de cuenta debe tener al menos 4 dígitos",
        severity: "error",
        open: true,
      });
      return;
    }

    const customer = customers.find(
      (c) =>
        c.accountNumber.toLocaleLowerCase() ===
          accountNumber.toLocaleLowerCase() &&
        c.firstName.toLocaleLowerCase() === firstName.toLocaleLowerCase()
    );

    if (!customer) {
      setAlert({
        message: "Cliente no encontrado, verifique los datos",
        severity: "error",
        open: true,
      });
      setCustomer({
        accountNumber: "",
        firstName: "",
        lastName: "",
        balance: 0,
      });
      return;
    }

    setAlert({
      message: "Cliente verificado con éxito",
      severity: "success",
      open: true,
    });

    setCustomer(customer);

    setLogger({
      firstName: "",
      accountNumber: "",
    });
  };

  const handleTransfer = () => {
    const { amount, destinationAccount } = transferData;

    if (!destinationAccount || amount <= 0) {
      setAlert({
        message: "Complete todos los campos de transferencia correctamente",
        severity: "error",
        open: true,
      });
      return;
    }

    if (destinationAccount === customer.accountNumber) {
      setAlert({
        message: "No puedes transferirte a tu misma cuenta",
        severity: "error",
        open: true,
      });
      return;
    }

    if (customer.balance < amount) {
      setAlert({
        message: "Saldo insuficiente",
        severity: "error",
        open: true,
      });
      return;
    }

    const customerDestination = customers.find(
      (c) =>
        c.accountNumber.toLocaleLowerCase() ===
        transferData.destinationAccount.toLocaleLowerCase()
    );

    if (!customerDestination) {
      setAlert({
        message: "No existe ese numero de cuenta",
        severity: "error",
        open: true,
      });
      return;
    }

    setTransferData((prev) => ({
      ...prev,
      name: customerDestination.firstName,
      date: new Date().toLocaleString("es-CO", {
        dateStyle: "long",
        timeStyle: "short",
      }),
    }));

    setOpenModal(true);
  };

  const confirmTransfer = () => {
    setAlert({
      message: `Transferencia de $${transferData.amount}`,
      severity: "success",
      open: true,
    });

    setTransferData({ amount: 0, destinationAccount: "", date: "", name: "" });
    setCustomer({ firstName: "", balance: 0, lastName: "", accountNumber: "" });
    setOpenModal(false);
  };

  return (
    <div className="transfers-container">
      <div className="transfers-header">
        <h2 className="transfers-title">Transferencias</h2>
      </div>
      <div className="transfers-content">
        <h3 className="tittle-content"> Confirme sus datos</h3>
        <div className="transfers-form">
          <Input
            label="Número de cuenta"
            placeholder="Ingresa el número de cuenta"
            type="text"
            name="accountNumber"
            onChange={onChange}
            value={logger.accountNumber}
          />
          <Input
            label="Nombre del cliente"
            placeholder="Ingresa el nombre del cliente"
            type="text"
            name="firstName"
            onChange={onChange}
            value={logger.firstName}
          />
        </div>
        <Button onClick={onSubmit}>
          <span>Verificar Cliente</span>
        </Button>
      </div>

      <div className="transfers-customer-info">
        {customer.firstName && (
          <div className="customer-info">
            <p>
              Bienvenido: {customer.firstName} {customer.lastName}
            </p>
            <p>Número de cuenta: {customer.accountNumber}</p>
            <p>Saldo: ${customer.balance}</p>

            <div className="transfers-form">
              <Input
                label="Cuenta destino"
                placeholder="Ingresa la cuenta de destino"
                type="text"
                name="destinationAccount"
                onChange={onTransferChange}
                value={transferData.destinationAccount}
              />
              <Input
                label="Monto"
                placeholder="Ingresa el monto a transferir"
                type="number"
                name="amount"
                onChange={onTransferChange}
                value={transferData.amount}
              />
            </div>
            <div className="transfers-button">
              <Button onClick={handleTransfer}>
                <span>Realizar Transferencia</span>
              </Button>
            </div>
          </div>
        )}
      </div>
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

      <ConfirmTransferModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmTransfer}
        amount={transferData.amount}
        date={transferData.date}
        name={transferData.name}
        destination={transferData.destinationAccount}
      />
    </div>
  );
}
