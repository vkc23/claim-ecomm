import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const claimSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    claimAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { claimAdded } = claimSlice.actions;

export default claimSlice.reducer;