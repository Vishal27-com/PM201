import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Item from './Item'

const ListItem = () => {
    const [data,setData]=useState([])
  return (
    <Flex direction='column' gap='10px' align='center'>
        <Item />
        <Item />
{
    data.map((item)=>
    <Item />
    )
}
    </Flex>
  )
}

export default ListItem