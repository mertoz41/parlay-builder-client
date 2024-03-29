import React from "react";
import { Box, Spinner, Text, Image, Flex } from "@chakra-ui/react";
import axios from "axios";
import { API_ROOT } from "../utils";
const TodaysGames = ({
  games,
  setSelectedTeam,
  setTeamName,
}: {
  games: any;
  setSelectedTeam: (table: any) => void;
  setTeamName: (team: string) => void;
}) => {
  const renderRow = (item: any, i: number) => {
    const renderTeam = (name: string, pic: string) => (
      <Box cursor={"pointer"} onClick={() => getTeamPlayers(name)}>
        <Text color="white" textAlign={"center"} fontSize={24}>
          {name}
        </Text>
        <Image alt="homepic" w={45} height={45} m="0 auto" src={pic} />
      </Box>
    );

    const getTeamPlayers = (team: string) => {
      axios
        .get(`${API_ROOT}get_team/${team}`, {
          headers: { "Content-Type": "application/json" },
        })
        .then((resp: any) => {
          setTeamName(resp.data.team_name);
          setSelectedTeam(resp.data.roster);
        });
    };
    return (
      <Flex
        key={i}
        w={{ base: "100%", lg: "20%" }}
        padding={5}
        borderBottomWidth={0.25}
        justifyContent={"space-around"}
      >
        {renderTeam(item[0], item[1])}
        <Text
          color="white"
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={34}
        >
          @
        </Text>
        {renderTeam(item[2], item[3])}
      </Flex>
    );
  };

  return (
    <Flex
      flexWrap={"wrap"}
      flexDirection={{ base: "column", lg: "row" }}
      w="100%"
      m="0 auto"
    >
      {games.length ? (
        games.map((game: any, i: number) => renderRow(game, i))
      ) : (
        <Spinner
          alignSelf={"center"}
          m="0 auto"
          size="xl"
          marginTop={10}
          color="white"
        />
      )}
    </Flex>
  );
};

export default TodaysGames;
