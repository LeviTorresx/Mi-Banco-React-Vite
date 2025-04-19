import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Customer from "../../types/Customers";
import axios from "axios";

const API_URL = "http://localhost:8080/api/customers";

// GET - Obtener todos los clientes
export const fetchCustomers = createAsyncThunk(
  "customers/fetchAll",
  async () => {
    const response = await axios.get<Customer[]>(API_URL);
    return response.data;
  }
);

// POST - Crear un nuevo cliente
export const createCustomer = createAsyncThunk(
  "customers/create",
  async (newCustomer: Customer) => {
    const response = await axios.post<Customer>(API_URL, newCustomer);
    return response.data;
  }
);

// DELETE - Eliminar cliente por número de cuenta
export const deleteCustomer = createAsyncThunk(
  "customers/delete",
  async (accountNumber: string) => {
    await axios.delete(`${API_URL}/${accountNumber}`);
    return accountNumber;
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState: [] as Customer[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        return state.filter(
          (customer) => customer.accountNumber !== action.payload
        );
      });
  },
});

export default customersSlice.reducer;
