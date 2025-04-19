import { createSlice } from "@reduxjs/toolkit";
import Transaction from "../../types/Transaction";

const initialState: Transaction[] = [
  {
    senderAccountNumber: "1001",
    receiverAccountNumber: "1002",
    amount: 10000,
    timestamp: "ayer",
  },
  {
    senderAccountNumber: "1003",
    receiverAccountNumber: "1001",
    amount: 20000,
    timestamp: "anteayer",
  },

];

const transactioSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default transactioSlice.reducer;
export const { addTransaction } = transactioSlice.actions;
