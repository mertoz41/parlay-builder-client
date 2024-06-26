import React, { useContext, useState } from "react";
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { getTeamPlayers, API_ROOT, getOpponentStats } from "../utils";
import { Context } from "../context";
import axios from "axios";

const AllTeams = ({ teams }: { teams: any }) => {
  const {
    setLoading,
    setTeamName,
    setSelectedTeam,
    teamName,
    playerData,
    setLast5opp,
    setShowLast5,
  } = useContext(Context);

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
    <Box>
      <Heading color={"white"} textAlign={"center"}>
        All Teams
      </Heading>
      <Flex overflowX={"auto"} flexWrap={{ base: "nowrap", lg: "wrap" }}>
        {teams.map((team: any, i: number) => (
          <Box
            flexShrink={0}
            cursor={"pointer"}
            key={i}
            onClick={() => teamAction(team.name)}
            backgroundColor={team.name === teamName ? "#595a6b" : "transparent"}
            _hover={{ backgroundColor: "#595a6b" }}
            borderRadius={20}
          >
            <Image alt="homepic" w={95} height={95} m="0 auto" src={team.img} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default AllTeams;
