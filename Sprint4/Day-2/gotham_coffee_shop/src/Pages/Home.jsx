import React from 'react'
import ProductCard from '../Components/ProductCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import {products} from '../data' 
const Home = () => {
  return (
    <Box mt='40px' p='10px'>
      <SimpleGrid columns={['1','2','3','4']} spacing='5'>
      {
        products.map((item)=>
        <ProductCard
        key={item.id}
        image={item.image}
        title={item.title}
        desc={item.description}
        price={item.price}
        />
        )
      }
      </SimpleGrid>
    </Box>
  )
}

export default Home