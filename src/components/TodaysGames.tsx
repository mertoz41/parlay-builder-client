import React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import axios from "axios";
import { API_ROOT, getTeamPlayers } from "../utils";
const TodaysGames = () => {
  const renderRow = (item: any, i: number) => {
    const renderTeam = (name: string, pic: string) => (
      <Box cursor={"pointer"} onClick={() => getTeamPlayers(name)}>
        <Text color="white" textAlign={"center"} fontSize={24}>
          {name}
        </Text>
        <Image alt="homepic" w={45} height={45} m="0 auto" src={pic} />
      </Box>
    );

    const getTeamPlayers = async (team: string) => {
      // const teamInfo: any = await getTeamPlayers(team);
      // setTeamName(teamInfo.teamName);
      // setSelectedTeam(teamInfo.roster);
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
      flexDirection={{ base: "column", lg: "column" }}
      w="100%"
      flex={1}
      color="white"
      m="0 auto"
    >
      <Heading textAlign={"center"}>Todays Games</Heading>
      <Text textAlign={"center"} fontSize={23}>
        Daily games will be displayed here once schedule is out.
      </Text>
      {/* {games.length ? (
        games.map((game: any, i: number) => renderRow(game, i))
      ) : (
        <Spinner
          alignSelf={"center"}
          m="0 auto"
          size="xl"
          marginTop={10}
          color="white"
        />
      )} */}
    </Flex>
  );
};

export default TodaysGames;
