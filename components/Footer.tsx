// components/Footer.js
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      width="100%"
      height="4rem"
      justifyContent="center"
      alignItems="center"
      zIndex="999"
      bg={"#f0f2f5;"}
    >
      <Text fontSize="lg">Vectium Finance {currentYear}</Text>
    </Flex>
  );
};

export default Footer;
