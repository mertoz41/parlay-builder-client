import React, { useContext } from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
import { Context } from "../context";
const Header = () => {
  const { loading } = useContext(Context);

  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex flex={1} justify={{ base: "center", lg: "normal" }}>
        <Heading alignSelf={"center"} color={"white"} backgroundColor={"black"}>
          NBA PARLAY BUILDER
        </Heading>
        {loading ? (
          <Spinner
            alignSelf={"center"}
            marginLeft={5}
            color="white"
            size="lg"
          />
        ) : null}
      </Flex>

      <PlayerSearch />
    </Flex>
  );
};

export default Header;
