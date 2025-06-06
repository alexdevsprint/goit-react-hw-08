import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filtersSlice";

//Прості селектори
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

//Складні селектори
// export const selectFilteredContacts = (state) => {
//   const contacts = selectContacts(state);
//   const filter = selectNameFilter(state); 

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
//Мемоізовані складні селектори
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {    
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  }
);