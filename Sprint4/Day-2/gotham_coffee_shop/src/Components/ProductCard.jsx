import { Box, Button, ButtonGroup, Heading, Img, Stack, Text
    // , Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text 
} from '@chakra-ui/react'
const ProductCard = ({image,title,desc,price}) => {
  return (
<Box boxShadow='2xl' p='10px' borderRadius='10px'>
    <Img  h='200px' w='100%' src={image} alt={image} borderRadius='lg' />
    <Stack m='5px 0' spacing='5'>
      <Heading size='md'>{title}</Heading>
      <Text>
      {desc}
      </Text>
    </Stack>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='yellow'>
      ₹ {price} 
      </Button>
      <Button variant='solid' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
</Box>
  )
}

export default ProductCard