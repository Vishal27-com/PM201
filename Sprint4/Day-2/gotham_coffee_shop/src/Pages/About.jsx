import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";
const About = () => {
  return (
    <Box h="70vh">
      <Center gap="10px">
        <Button variant="solid" colorScheme="green">
          Continue Shopping
        </Button>
        <Button variant="solid" colorScheme="blue">
          Learn More
        </Button>
      </Center>
    </Box>
  );
};

export default About;
