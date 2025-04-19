import { configureStore } from "@reduxjs/toolkit";
import CustomersReducer from "../slices/CustomersSlice";
import TransactionReducer from "../slices/TransactionSlice"

export const store = configureStore({
  reducer: {
    customers: CustomersReducer,
    transaction: TransactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
