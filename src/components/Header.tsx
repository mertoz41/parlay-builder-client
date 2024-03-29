import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
const Header = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex flex={1} justify={{ base: "center", lg: "normal" }}>
        <Heading alignSelf={"center"} color={"white"} backgroundColor={"black"}>
          NBA PARLAY BUILDER
        </Heading>
      </Flex>

      <PlayerSearch />
    </Flex>
  );
};

export default Header;
