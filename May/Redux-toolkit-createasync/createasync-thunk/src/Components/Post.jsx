import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../features/post/postAction';

const Post = () => {
    const {data,loading,error}=useSelector(store=>store.post)
    const dispatch=useDispatch();
    const getAllPost=async ()=>{
        dispatch(getPost())
    }
    if(loading)return <h1>...loading</h1>
    if(error)return <h1>Something went wrong</h1>
  return (
    <div>
        <button onClick={()=>getAllPost()}>Get Post</button>
        {   
            data.map((item)=>
            <p key={item.id}>{item.title}</p>
            )
        }
    </div>
  )
}

export default Post