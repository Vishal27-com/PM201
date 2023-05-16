import React, { useState } from 'react'
import {Box, Button,Flex,Input} from "@chakra-ui/react"
import { addTodo } from '../Redux/Slices/TodoSlice';
import {useDispatch} from 'react-redux'
const InputItem = () => {
    const [text,setText]=useState("");
    const [desc,setDesc]=useState("");
    const dispatch=useDispatch()
    const addHandler=()=>{
      const todo={
        title:text,
        desc:desc,
        status:false
      }
      dispatch(addTodo(todo))
    }
  return (
    <Flex gap='10px' m='20px 0' justify='center' >
    <Box>
   <Input type='text' mb='10px' placeholder='Title...' w='200px' onChange={(e)=>setText(e.target.value)} />
   <br />
   <textarea placeholder='Description...' style={{padding:"15px"}} onChange={(e)=>setDesc(e.target.value)}></textarea>
    </Box>
   <Button variant='solid' colorScheme='green' onClick={addHandler}>+</Button>
    </Flex>
  )
}

export default InputItem