import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "all", // "all", "completed", "pending"
    searchText: ""
  },
  reducers: {
    setFilterStatus(state, action) {
      state.status = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    resetFilters(state) {
      state.status = "all";
      state.searchText = "";
    }
  }
});

export const { setFilterStatus, setSearchText, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
