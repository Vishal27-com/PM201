import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product/ProductSlice"
export const store=configureStore({
    reducer:{
        product:productReducer
    },
})