import React from 'react'
import InputItem from './Components/InputItem'
import { Box, Text } from '@chakra-ui/react'
import ListItem from './Components/ListItem'

const App = () => {
  return (
    <Box fontFamily='sans' fontWeight='600'>
      <Text fontSize='20px' align='center' color='coral'>Todo With Redux Toolkit</Text>
      <InputItem />
      <ListItem />
    </Box>
  )
}

export default App