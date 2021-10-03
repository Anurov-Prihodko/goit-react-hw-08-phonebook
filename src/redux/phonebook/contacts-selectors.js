import { createSelector } from '@reduxjs/toolkit';

const getAllConatcts = state => state.contacts.note;

// ===== used in App.js =====
export const getLoading = state => state.contacts.loading;
export const getContactsLength = state => state.contacts.note.length;

export const getCompleteContactsCount = createSelector(
  [getAllConatcts],
  allContacts => {
    return allContacts.reduce(
      (total, contact) => (contact.completed ? total + 1 : total),
      0,
    );
  },
);

// ===== used in Filter.js =====
export const getFilter = state => state.contacts.filter;

// ===== used in ContactList.js =====
export const getVisibleContacts = createSelector(
  [getAllConatcts, getFilter],

  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// ===== Без мемоизации =====
// export const getVisibleContacts = state => {
//   const allContacts = getAllConatcts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase().trim();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
