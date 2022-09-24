import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const claimSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    claimAdded(state, action) {
      state.push(action.payload);
    },
    saveIncidentInfo(state, action) {
      console.log("payload", action.payload);
      state.push(action.payload);
    },
  },
});

export const { claimAdded, saveIncidentInfo } = claimSlice.actions;

export default claimSlice.reducer;
