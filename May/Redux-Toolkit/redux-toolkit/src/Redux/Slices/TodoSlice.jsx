import {createSlice} from "@reduxjs/toolkit";
const todo=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo(state,action){
            state.push(action.payload);
        },
        toggleTodo(state,action){},
        deleteTodo(state,action){
         state.splice(action.payload,1)
        },
    }
})
export const {addTodo,deleteTodo}=todo.actions;
export default todo ;