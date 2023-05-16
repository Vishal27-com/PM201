import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Item = () => {
  return (
    <Flex p='10px' direction='column' border='1px solid lightgrey'gap='20px' bg='yellow.400' align='center' justify='space-between'>
   <Text w='200px'>Title</Text>
   <Text w='200px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
   <Button variant='solid' colorScheme='red'>Delete</Button>
    </Flex>
  )
}

export default Item