import { configureStore } from "@reduxjs/toolkit";
import todo from "./Slices/TodoSlice";
const store=configureStore({
    reducer:{
        todos:todo.reducer 
    }
});

export default store;
