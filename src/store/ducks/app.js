import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  started: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStarted: (state, action) => {
      state.started = action.payload;
    },
  },
});

export const {actions, reducer} = appSlice;
