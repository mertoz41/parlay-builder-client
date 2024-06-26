import React, { useContext } from "react";
import { Flex, Heading, Spinner, Box } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
import { Context } from "../context";
const Header = () => {
  const { loading } = useContext(Context);

  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex
        flex={1}
        justify={{ base: "center", lg: "normal" }}
      >
        <Box display={{ lg: "none" }} flex={1}></Box>
          <Heading
            alignSelf={"center"}
            color={"white"}
            backgroundColor={"black"}
          >
            NBA STATS SCRAPER
          </Heading>
        <Box flex={1}>
          {loading ? (
            <Spinner
              alignSelf={"center"}
              marginLeft={{base: 3, lg:5}}
              color="white"
              size="lg"
            />
          ) : null}
        </Box>
      </Flex>
      <PlayerSearch />
    </Flex>
  );
};

export default Header;
