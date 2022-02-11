import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("fetchCate", async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  category_data: [],
  category_status: "idle",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [fetchCategory.pending]: (state) => {
      state.category_status = "pending";
      state.category_data = null;
    },
    [fetchCategory.fulfilled]: (state, { payload }) => {
      state.category_status = "idle";
      state.category_data = payload;
    },
    [fetchCategory.rejected]: (state) => {
      state.category_status = "idle";
      state.category_data = null;
    },
  },
});
