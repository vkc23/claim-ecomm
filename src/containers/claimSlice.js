import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const claimSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    claimAdded(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

const { actions, reducer } = claimSlice;
export const { claimAdded } = actions;
export default reducer;
