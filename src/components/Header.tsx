import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
const Header = ({
  setSeasonStats,
  setLast5,
  setPlayerPic,
  setPlayerName,
  setOpp5,
  setNextOpponent,
}: {
  setSeasonStats: any;
  setLast5: any;
  setPlayerPic: any;
  setPlayerName: any;
  setOpp5: any;
  setNextOpponent: any;
}) => {
  return (
    <Flex justifyContent={"center"} flexDir={{ base: "column", lg: "row" }}>
      <Heading
        alignSelf={"center"}
        color={"white"}
        marginRight={{ base: 0, lg: 10 }}
      >
        NBA PARLAY BUILDER
      </Heading>
      <PlayerSearch
        setSeasonStats={setSeasonStats}
        setLast5={setLast5}
        setPlayerPic={setPlayerPic}
        setPlayerName={setPlayerName}
        setOpp5={setOpp5}
        setNextOpponent={setNextOpponent}
      />
    </Flex>
  );
};

export default Header;
