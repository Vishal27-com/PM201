import React from "react";
import {
  Box,
  Button,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const pages = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/contact", title: "Contact" },
  { to: "/login", title: "Login" },
];
const Navbar = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center" h="60px" p="10px">
        <Flex align="center" gap="5px">
          Gotham{" "}
          <Img
            h="30px"
            src="https://img.icons8.com/ios-filled/1x/cafe.png"
            alt="company logo"
          />
          Shop
        </Flex>
        {/* Desktop and tablet size */}
        <Flex display={["none", "flex", "flex"]} w="60%" gap="30px">
          {pages.map((item) => (
            <Link to={item.to}>
              <Text _hover={{ color: "#fff" }}>{item.title}</Text>
            </Link>
          ))}
        </Flex>
        {/* Mobile size */}
        <Box display={["block", "none", "none"]}>
          <Menu>
            <MenuButton as={Button} bg="transparent">
              <Img src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/1x/external-hamburger-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan-2.png" />
            </MenuButton>
            <MenuList>
              {pages.map((item) => (
                <Link to={item.to}>
                  <MenuItem _hover={{ color: "#fff" }}>{item.title}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
