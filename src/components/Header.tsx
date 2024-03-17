import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
const Header = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Heading
        alignSelf={"center"}
        color={"white"}
        marginRight={{ base: 0, lg: 10 }}
        backgroundColor={"black"}
      >
        NBA PARLAY BUILDER
      </Heading>
      <Heading color="white" textAlign={"center"}>
        Todays Games
      </Heading>
      <PlayerSearch />
    </Flex>
  );
};

export default Header;
