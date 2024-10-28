import React, { useState, useEffect } from "react";
import { Box, Image, Flex, Spinner } from "@chakra-ui/react";
import { getTeamPlayers, API_ROOT, getOpponentStats } from "../utils";
import axios from "axios";

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
  // useEffect(() => {
  //   getAllTeams();
  // }, []);

  // const [teams, setTeams] = useState<any>([]);
  // const getAllTeams = () => {
  //   axios
  //     .get(`${API_ROOT}get_all_teams`, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((resp: any) => {
  //       setTeams(resp.data.teams);
  //     });
  // };
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
    <Flex data-testid="teams" overflowX={"auto"}>
      {!teams.length ? (
        <Flex w={"100%"} justify={"center"} marginTop={10}>
          <Spinner alignSelf={"center"} color="white" size="xl" />
        </Flex>
      ) : (
        teams.map((team: any, i: number) => (
          <Box
            flexShrink={0}
            cursor={"pointer"}
            key={i}
            data-testid="team-item"
            onClick={() => teamAction(team.name)}
            backgroundColor={team.name === teamName ? "#595a6b" : "transparent"}
            _hover={{ backgroundColor: "#595a6b" }}
            borderRadius={20}
          >
            <Image alt="homepic" w={85} height={85} m="0 auto" src={team.img} />
          </Box>
        ))
      )}
    </Flex>
  );
};

export default AllTeams;
