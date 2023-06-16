import {createSlice } from "@reduxjs/toolkit"
import { getAllProduct } from "./ProductAction"
interface Products{
    loading:boolean,
    data:Product[],
    error:boolean
}
export interface Product{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rating
}
export interface Rating{
    rate:number,
    count:number
}
interface Action{
    type:string,
    payload:Product[]
}
const initialState={
    loading:false,
    data:[],
    error:false
}

const productSlice=createSlice({
     name:"product",
     initialState,
     reducers:{},
     extraReducers:{
     [getAllProduct.pending]:(state:Products)=>{
         state.loading=true;
     },
     [getAllProduct.fulfilled]:(state:Products,action:Action)=>{
        state.loading=false;
        state.data=action.payload
    },
    [getAllProduct.rejected]:(state:Products)=>{
        state.loading=false;
        state.error=true;
    }
     }
})

export default productSlice.reducer