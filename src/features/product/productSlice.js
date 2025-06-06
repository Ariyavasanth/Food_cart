import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/product.json";

const initialState = {
  items: data,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
