import React from "react";
import { Box, Heading, Text, Image, Flex, Spinner } from "@chakra-ui/react";
import { getTeamPlayers } from "../utils";

const teamNames: any = {
  ATL: "Atlanta Hawks",
  BOS: "Boston Celtics",
  BKN: "Brooklyn Nets",
  CHO: "Charlotte Hornets",
  CHI: "Chicago Bulls",
  CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks",
  DEN: "Denver Nuggets",
  DET: "Detroit Pistons",
  GSW: "Golden State Warriors",
  HOU: "Houston Rockets",
  IND: "Indiana Pacers",
  LAC: "Los Angeles Clippers",
  LAL: "Los Angeles Lakers",
  MEM: "Memphis Grizzlies",
  MIA: "Miami Heat",
  MIL: "Milwaukee Bucks",
  MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans",
  NYK: "New York Knicks",
  ORL: "Orlando Magic",
  OKC: "Oklahoma City Thunder",
  PHI: "Philadelphia 76ers",
  PHO: "Phoenix Suns",
  POR: "Portland Trailblazers",
  SAS: "San Antonio Spurs",
  SAC: "Sacramento Kings",
  TOR: "Toronto Raptors",
  UTA: "Utah Jazz",
  WAS: "Washington Wizards",
};
const TodaysGames = ({
  games,
  setTeamName,
  setSelectedTeam,
}: {
  games: any;
  setTeamName: any;
  setSelectedTeam: any;
}) => {
  const renderRow = (item: any, i: number) => {
    const renderTeam = (name: string, pic: string) => (
      <Box cursor={"pointer"} onClick={() => getRoster(name)}>
        <Text color="white" textAlign={"center"} fontSize={24}>
          {name}
        </Text>
        <Image alt="homepic" w={45} height={45} m="0 auto" src={pic} />
      </Box>
    );

    const getRoster = async (team: string) => {
      const teamInfo = await getTeamPlayers(team);
      setTeamName(teamNames[team]);
      setSelectedTeam(teamInfo.roster);
    };
    return (
      <Flex
        key={i}
        w={{ base: "100%", lg: "100%" }}
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
      margin={{ base: 0, xl: 5 }}
      overflow={"auto"}
      borderRadius={20}
      backgroundColor={"#595a6b"}
      color="white"
    >
      <Heading textAlign={"center"}>Todays Games</Heading>
      {games?.length ? (
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
