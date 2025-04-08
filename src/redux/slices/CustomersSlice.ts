import { createSlice } from "@reduxjs/toolkit";
import Customer from "../../types/Customers";

const initialState: Customer[] = [
  {
    accountNumber: "1001",
    firstName: "Juan",
    lastName: "Pérez",
    balance: 150000,
  },
  {
    accountNumber: "1002",
    firstName: "Laura",
    lastName: "Gómez",
    balance: 245000,
  },
  {
    accountNumber: "1003",
    firstName: "Carlos",
    lastName: "Ramírez",
    balance: 98000,
  },
  {
    accountNumber: "1004",
    firstName: "Ana",
    lastName: "López",
    balance: 320000,
  },

  {
    accountNumber: "1005",
    firstName: "Pedro",
    lastName: "Martínez",
    balance: 75000,
  },
  {
    accountNumber: "1006",
    firstName: "María",
    lastName: "Fernández",
    balance: 120000,
  },
  {
    accountNumber: "1007",
    firstName: "Luis",
    lastName: "Torres",
    balance: 200000,
  },
];

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
    removeCustomer: (state, action) => {
      return state.filter(
        (customer) => customer.accountNumber !== action.payload
      );
    },
  },
});

export default customersSlice.reducer;
export const { addCustomer, removeCustomer } = customersSlice.actions;
