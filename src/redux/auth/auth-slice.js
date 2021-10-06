import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: (_, action) => action.payload,
    [authOperations.register.pending]: () => null,

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]: (_, action) => action.payload,
    [authOperations.logIn.pending]: () => null,

    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected]: (_, action) => action.payload,
    [authOperations.logOut.pending]: () => null,

    [authOperations.fetchCurrentUser.pending](state, action) {
      state.user = action.payload;
      state.isFetching = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      // console.log(action);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.user = action.payload;
      state.isFetching = false;
    },
  },
});

export default authSlice.reducer;
