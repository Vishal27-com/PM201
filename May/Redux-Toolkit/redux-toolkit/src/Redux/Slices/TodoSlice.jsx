import {createSlice} from "@reduxjs/toolkit";
const todo=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo(state,action){},
        toggleTodo(state,action){},
        deleteTodo(state,action){},
    }
})
export default todo ;