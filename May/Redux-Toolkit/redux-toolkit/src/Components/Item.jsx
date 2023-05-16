import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../Redux/Slices/TodoSlice';
const Item = ({id,title,status,desc}) => {
  const dispatch=useDispatch();
  const deleteHandler=()=>{
    dispatch(deleteTodo(id))
  }
  return (
    <Flex p='10px' direction='column' border='1px solid lightgrey' gap='20px' bg='yellow.400' align='center' justify='space-between'>
   <Text w='200px'>{title}</Text>
   <Text w='200px'>{desc}</Text>
   <Button variant='solid' colorScheme='red' onClick={deleteHandler}>Delete</Button>
    </Flex>
  )
}

export default Item