import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "fetchproducts",
  async (category) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  products_data: [],
  products_status: "idel",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products_status = "loading";
      state.products_data = null;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products_status = "idel";
      state.products_data = payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.products_status = "idle";
      state.products_data = null;
    },
  },
});
