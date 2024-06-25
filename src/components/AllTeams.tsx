import React, { useContext, useState } from "react";
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { getTeamPlayers, API_ROOT } from "../utils";
import { Context } from "../context";
import axios from "axios";

const AllTeams = ({ teams }: { teams: any }) => {
  const { setLoading, setTeamName, setSelectedTeam, teamName, playerData, setLast5opp } =
    useContext(Context);

  const teamAction = (name: string) => {
    setLoading(true);

    if (playerData) {
      let splittedName = playerData.fullName.split(" ");
      let firstName = splittedName[0];
      let lastName = splittedName[1];

      axios
        .post(
          `${API_ROOT}get_opponent_stats/`,
          {
            first: firstName.toLowerCase(),
            last: lastName.toLowerCase(),
            team: name.split(" ").pop()?.toLowerCase(),
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((resp: any) => {
          setLast5opp(resp.data.opp_stats);
          setLoading(false)
        });
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
