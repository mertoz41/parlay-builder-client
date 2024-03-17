import React, { useContext } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
import { Context } from "../context";
const Header = () => {
  const { playerData } = useContext(Context);
  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex flex={1} justify={{base: "center", lg: "normal"}}>
        <Heading
          alignSelf={"center"}
          color={"white"}
          
          // marginRight={{ base: 0, lg: 10 }}
          backgroundColor={"black"}
        >
          NBA PARLAY BUILDER
        </Heading>
      </Flex>
      <Flex flex={1} justifyContent={"center"}>
        {playerData ? null : (
          <Heading color="white" textAlign={"center"}>
            Todays Games
          </Heading>
        )}
      </Flex>
      <PlayerSearch />
    </Flex>
  );
};

export default Header;
