import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  id: '',
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    initUser: (state, action) => {
      return initialState;
    },
  },
});

export const name = userSlice.name;
export const reducer = userSlice.reducer;
export const actions = {
  ...userSlice.actions,
};
