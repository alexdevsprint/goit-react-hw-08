import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filterReducer from "./filtersSlice";
import authReducer from "./auth/slice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});
