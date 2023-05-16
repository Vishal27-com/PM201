import { Flex } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'

const ListItem = () => {
    const state=useSelector(store=>store.todos);
    
  return (
    <Flex direction='column' gap='10px' align='center'>
{
    state.map((item,ind)=>
    <Item 
    key={ind}
    id={ind}
    title={item.title}
    desc={item.desc}
    status={item.status} 
    />
    )
}
    </Flex>
  )
}

export default ListItem