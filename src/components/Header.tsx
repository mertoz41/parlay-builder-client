import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PlayerSearch from "./PlayerSearch";
const Header = ({
  setSeasonStats,
  setLast5,
  setPlayerPic,
  setPlayerName,
  setOpp5,
}: {
  setSeasonStats: any;
  setLast5: any;
  setPlayerPic: any;
  setPlayerName: any;
  setOpp5: any;
}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      padding={5}
      borderBottomWidth={0.1}
      borderBottomColor={"white"}
    >
      <PlayerSearch
        setSeasonStats={setSeasonStats}
        setLast5={setLast5}
        setPlayerPic={setPlayerPic}
        setPlayerName={setPlayerName}
        setOpp5={setOpp5}
      />
      <Heading alignSelf={"center"} color={"white"}>
        NBA PARLAY BUILDER
      </Heading>
    </Flex>
  );
};

export default Header;
