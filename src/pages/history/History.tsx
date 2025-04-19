import { useState } from "react";
import "./History.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { Button, Input, Navigate } from "../../components";
import Transaction from "../../types/Transaction";

export default function History() {
  const [searchValue, setSearchValue] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [transactionFiltered, setTransactionFiltered] = useState<Transaction[]>(
    []
  );

  const transactions = useSelector((state: RootState) => state.transaction);

  const handleSearch = () => {
    const trimmed = searchValue.trim().toLowerCase();
    setAccountNumber(trimmed); // guardamos solo cuando se hace click

    const filtered = transactions.filter(
      (tx) =>
        tx.senderAccountNumber.toLowerCase() === trimmed ||
        tx.receiverAccountNumber.toLowerCase() === trimmed
    );

    setTransactionFiltered(filtered);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="history-container">
      <h2 className="history-title">Últimos movimientos</h2>

      <div className="search-bar">
        <Input
          label="Número de cuenta"
          placeholder="Número de cuenta"
          onChange={onChange}
          name="searchValue"
          type="text"
          value={searchValue}
        />
        <div>
          <Button onClick={handleSearch}>
            <span>Buscar</span>
          </Button>
        </div>
      </div>

      <ul className="transaction-list">
        {transactionFiltered.map((tx, idx) => {
          const isSent = tx.senderAccountNumber.toLowerCase() === accountNumber;
          const sign = isSent ? "-" : "+";
          const otherParty = isSent
            ? tx.receiverAccountNumber
            : tx.senderAccountNumber;

          return (
            <li className="transaction-item" key={idx}>
              <div className="transaction-info">
                <span className="transaction-name">
                  {isSent ? "Enviado a" : "Recibido de"} {otherParty}
                </span>
                <span
                  className={`transaction-amount ${
                    isSent ? "sent" : "received"
                  }`}
                >
                  {sign} ${tx.amount.toLocaleString()}
                </span>
              </div>
              <span className="transaction-date">{tx.timestamp}</span>
            </li>
          );
        })}
      </ul>

      {transactionFiltered.length === 0 && accountNumber && (
        <p className="no-transactions">No se encontraron movimientos.</p>
      )}
      <div className="zone-navigate">
        <Navigate label="Atras" to="/" />
        <Navigate label="Realizar transferencia" to="/transferencias"/>
      </div>
    </div>
  );
}
