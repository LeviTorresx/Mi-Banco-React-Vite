import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { FeedbackAlert, Navigate } from "../../components";
import { deleteCustomer, fetchCustomers } from "../../redux/slices/CustomersSlice";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const customers = useSelector((state: RootState) => state.customers);

  const dispatch = useDispatch<AppDispatch>();

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const onDeleteCustomer = (accountNumber: string) => {
    try {
      dispatch(deleteCustomer(accountNumber));
      setAlert({
        open: true,
        message: `Cliente eliminado ${accountNumber} correctamente`,
        severity: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: "Error al eliminar cliente",
        severity: "error",
      });

      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch, customers]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Lista de Clientes</h2>
      <div className="cards-wrapper">
        {customers.map((c) => (
          <div className="customer-card" key={c.accountNumber}>
            <div className="card-info">
              <p>
                <strong>Nombre:</strong> {c.firstName} {c.lastName}
              </p>
              <p>
                <strong>Cuenta:</strong> {c.accountNumber}
              </p>
              <p>
                <strong>Saldo:</strong> ${c.balance.toLocaleString()}
              </p>
            </div>
            <div className="card-actions">
              <button
                className="delete-btn"
                onClick={() => onDeleteCustomer(c.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <Navigate label="Atrás" to="/" />
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
    </div>
  );
}
