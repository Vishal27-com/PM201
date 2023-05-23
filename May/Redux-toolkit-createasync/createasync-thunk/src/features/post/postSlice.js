import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, getPost, updatePost } from "./postAction";
const initialState = {
  data: [],
  loading: false,
  error: false,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading=true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading=false;
      state.data=action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loading=false;  
      state.error=true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.data=action.payload;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.data=action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.data=action.payload;
    },
  },
});

export default postSlice.reducer;


