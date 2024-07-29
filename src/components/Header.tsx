import React from "react";
import { Flex, Heading, Spinner, Box } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
const Header = ({
  loading,
  setPlayerData,
  setLast5opp,
  setShowLast5,
}: {
  loading: boolean;
  setPlayerData: any;
  setLast5opp: any;
  setShowLast5: any
}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex flex={1} justify={{ base: "center", lg: "normal" }}>
        <Box display={{ lg: "none" }} flex={1}></Box>
        <Heading alignSelf={"center"} color={"white"} backgroundColor={"black"}>
          NBA STATS SCRAPER
        </Heading>
        <Box flex={1}>
          {loading ? (
            <Spinner
              alignSelf={"center"}
              marginLeft={{ base: 3, lg: 5 }}
              color="white"
              size="lg"
            />
          ) : null}
        </Box>
      </Flex>
      <PlayerSearch
        setPlayerData={setPlayerData}
        setLast5opp={setLast5opp}
        setShowLast5={setShowLast5}
      />
    </Flex>
  );
};

export default Header;
