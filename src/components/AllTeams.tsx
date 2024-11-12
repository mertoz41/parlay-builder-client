import React from "react";
import { Box, Image, Flex, Spinner, GridItem, Heading } from "@chakra-ui/react";
import { getTeamPlayers, getOpponentStats } from "../utils";
import Loading from "./Loading";

const AllTeams = ({
  teams,
  setLoading,
  setTeamName,
  setSelectedTeam,
  teamName,
  playerData,
  setLast5opp,
  setShowLast5,
}: {
  teams: any[];
  setLoading: any;
  setTeamName: any;
  setSelectedTeam: any;
  teamName: any;
  playerData: any;
  setLast5opp: any;
  setShowLast5: any;
}) => {
  const teamAction = async (name: string) => {
    setLoading(true);

    if (playerData) {
      let splittedName = playerData.fullName.split(" ");
      let firstName = splittedName[0];
      let lastName = splittedName[1];
      const opponentStats = await getOpponentStats(firstName, lastName, name);
      setLast5opp({ teamName: name, stats: opponentStats });
      setShowLast5(false);
      setLoading(false);
    } else {
      getTeamRoster(name);
    }
  };
  const getTeamRoster = async (name: string) => {
    setTeamName(name);
    const teamInfo = await getTeamPlayers(name);
    setSelectedTeam(teamInfo.roster);
    setLoading(false);
  };
  return (
    <GridItem rowSpan={{ base: 1, lg: 3 }} colSpan={{ base: 8, lg: 8 }}>
      <Heading textAlign={"center"} color={"white"}>
        All Teams
      </Heading>

      {!teams.length ? (
        <Loading website="www.nba.com" />
      ) : (
        <Flex
          data-testid="teams"
          overflowY={"auto"}
          backgroundColor="#595a6b"
          marginX={{ base: 0, lg: 4 }}
          paddingY={2}
          borderRadius={20}
        >
          {teams.map((team: any, i: number) => (
            <Box
              flexShrink={0}
              cursor={"pointer"}
              key={i}
              data-testid="team-item"
              onClick={() => teamAction(team.name)}
              backgroundColor={
                team.name === teamName ? "#303147" : "transparent"
              }
              _hover={{ backgroundColor: "#303147" }}
              borderRadius={20}
            >
              <Image
                alt="homepic"
                w={85}
                height={85}
                m="0 auto"
                src={team.img}
              />
            </Box>
          ))}
        </Flex>
      )}
    </GridItem>
  );
};

export default AllTeams;
