import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Transaction from "../../types/Transaction";
import axios from "axios";

// GET - Obtener historial de transferecias por número de cuenta
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (accountNumber: string) => {
    const response = await axios.get<Transaction[]>(
      `http://localhost:8080/api/transactions/${accountNumber}`
    );
    return response.data;
  }
);

// POST - Crear una nueva transferencia
export const createTransaction = createAsyncThunk(
  "transactions/create",
  async (newTransaction: Transaction) => {
    const response = await axios.post<Transaction>(
      "http://localhost:8080/api/transactions",
      newTransaction
    );
    return response.data;
  }
);



const transactioSlice = createSlice({
  name: "transaction",
  initialState: [] as Transaction[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default transactioSlice.reducer;

