import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchItem: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { searchItem } = searchSlice.actions;
export default searchSlice.reducer;
