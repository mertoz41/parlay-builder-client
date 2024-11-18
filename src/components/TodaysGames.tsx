import React from "react";
import { Box, Heading, Text, Image, Flex, GridItem } from "@chakra-ui/react";
import { getTeamPlayers } from "../utils";
import Loading from "./Loading";

const teamNames: any = {
  ATL: "Atlanta Hawks",
  BOS: "Boston Celtics",
  BKN: "Brooklyn Nets",
  BRK: "Brooklyn Nets",
  CHO: "Charlotte Hornets",
  CHA: "Charlotte Hornets",
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
  PHX: "Phoenix Suns",
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
  setLoading,
}: {
  games: any;
  setTeamName: any;
  setSelectedTeam: any;
  setLoading: any;
}) => {
  const renderGame = (item: any, i: number) => {
    const renderTeam = (name: string, pic: string) => (
      <Flex
        direction={"column"}
        flex={1}
        cursor={"pointer"}
        paddingX={5}
        onClick={() => getRoster(name)}
      >
        <Text color="white" textAlign={"center"} fontSize={24}>
          {name}
        </Text>
        <Image alt="homepic" w={45} height={45} m="0 auto" src={pic} />
      </Flex>
    );

    const getRoster = async (team: string) => {
      setLoading(true);
      const teamInfo: any = await getTeamPlayers(team);
      if (!teamInfo.error) {
        setTeamName(teamNames[team]);
        setSelectedTeam(teamInfo.roster);
      }
      setLoading(false);
    };
    return (
      <Flex
        key={i}
        backgroundColor={"#595a6b"}
        margin={4}
        boxShadow={"lg"}
        borderRadius={20}
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
    <GridItem
      rowSpan={{ base: 6, lg: 4 }}
      colSpan={{ base: 8, lg: 8 }}
      overflowY={{ base: "auto", lg: "hidden" }}
    >
      <Box>
        <Heading textAlign={"center"} color={"white"}>
          Todays Games
        </Heading>
      </Box>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        overflowX={{ base: "hidden", lg: "auto" }}
        overflowY={{ base: "auto", lg: "hidden" }}
      >
        {games?.length ? (
          games.map((game: any, i: number) => renderGame(game, i))
        ) : (
          <Loading website="www.foxsports.com" />
        )}
      </Flex>
    </GridItem>
  );
};

export default TodaysGames;
