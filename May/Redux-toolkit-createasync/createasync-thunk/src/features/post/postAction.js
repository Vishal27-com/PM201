import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-type": "application/json"
    }
})
export const getPost=createAsyncThunk("post/get",async()=>{
let res=await api.get('posts');
return res.data
})
export const addPost=createAsyncThunk("post/add",async(data)=>{
let res=await api.post('posts',data);
return res.data
})
export const updatePost=createAsyncThunk("post/update",async(data,id)=>{
let res=await api.patch(`post/${id}`,data);
return res.data
})
export const deletePost=createAsyncThunk("post/delete",async(id)=>{
let res=await api.delete(`post/${id}`);
return res.data
})


