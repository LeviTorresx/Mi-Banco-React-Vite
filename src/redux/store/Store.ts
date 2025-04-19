import { configureStore } from "@reduxjs/toolkit";
import CustomersReducer from "../slices/CustomersSlice";

export const store = configureStore({
  reducer: {
    customers: CustomersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
