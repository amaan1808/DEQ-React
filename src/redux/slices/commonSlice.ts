import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface commonState {
  step: number;
}

const initialState: commonState = {
  step: 0,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = commonSlice.actions;

export default commonSlice.reducer;
