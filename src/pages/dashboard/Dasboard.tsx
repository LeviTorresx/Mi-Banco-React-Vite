import { useSelector } from "react-redux";
import "./Dashboard.css";
import { RootState } from "../../redux/store/Store";
import {Navigate} from "../../components";

export default function Dasboard() {
  const customers = useSelector((state: RootState) => state.customers);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Lista de Clientes</h2>
      <div className="table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cuenta</th>
              <th>Saldo en $</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.accountNumber}>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.accountNumber}</td>
                <td>{c.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Navigate label="Regresar" to="/" />
    </div>
  );
}
