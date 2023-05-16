import React, { useState } from 'react'
import {Box,Button,Flex,Input} from "@chakra-ui/react"
const InputItem = () => {
    const [text,setText]=useState("");
    const addHandler=()=>{

    }
  return (
    <Flex gap='10px' m='20px 0' justify='center' >
   <Input type='text' w='200px' onChange={()=>setText(e.target.value)} />
   <Button variant='solid' colorScheme='green' onClick={addHandler}>+</Button>
    </Flex>
  )
}

export default InputItem