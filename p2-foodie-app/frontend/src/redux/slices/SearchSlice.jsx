import { createSlice } from "@reduxjs/toolkit";
import FoodData from '../../data/FoodData';

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    search: FoodData,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;