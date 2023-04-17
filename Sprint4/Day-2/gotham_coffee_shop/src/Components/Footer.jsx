import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box position="fixed" w="100%" bottom="0px" p="10px" >
      <Center gap="20px" mb="10px">
        <a href="https://www.linkedin.com/in/vishal-gupta-573335237">
          <Img
            h="45px"
            src="https://img.icons8.com/3d-fluency/94/000000/linkedin.png"
            alt="Linkedin"
          />
        </a>
        <a href="https://github.com/Vishal27-com">
          <Img
            h="45px"
            src="https://img.icons8.com/3d-fluency/94/000000/github.png"
            alt="Github"
          />
        </a>
        <a href="https://twitter.com/VishalG271203">
          <Img
            h="45px"
            src="https://img.icons8.com/3d-fluency/94/000000/twitter-circled.png"
            alt="Facebook"
          />
        </a>
      </Center>
      <Center mb="10px">
        <Text>&copy; 2023 Copyright. All rights reserved.</Text>
      </Center>
      <Center>
        <Text>Made with ❤️ by Vishal Gupta</Text>
      </Center>
    </Box>
  );
};

export default Footer;
