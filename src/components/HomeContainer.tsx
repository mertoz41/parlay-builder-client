import React, { useEffect, useState, useContext} from "react";
import TodaysGames from "./TodaysGames";
import axios from "axios";
import Stats from "./Stats";
import { GridItem, Heading, Spinner, Flex } from "@chakra-ui/react";
import CloseButton from "./CloseButton";
import AllTeams from "./AllTeams";
import { API_ROOT } from "../utils";
import { Context } from "../context";
const HomeContainer = () => {
  useEffect(() => {
    getGames();
  }, []);
  const [games, setGames] = useState<[]>([]);
  const [mvpList, setMvpList] = useState<any>(null);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [teams, setTeams] = useState<[]>([]);


  const getGames = () => {
    axios
      .get(
        API_ROOT,

        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resp: any) => {
        setTeams(resp.data.all_teams);
        setMvpList(resp.data.mvp_list);
        setGames(resp.data.todays_games);
      });
  };
  return (
    <>
      <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 8, lg: 8 }}>
        <Heading textAlign={"center"} color={"white"}>
          All Teams
        </Heading>
      </GridItem>
      <GridItem
        rowSpan={{ base: 8, lg: 4 }}
        colSpan={{ base: 8, lg: 8 }}
        overflow={"auto"}
      >
        <Flex overflow={"auto"}>
          {teams.length ? (
            <AllTeams
              teams={teams}
              setTeamName={setTeamName}
              setSelectedTeam={setSelectedTeam}
            />
          ) : (
            <Flex w={"100%"} justify={"center"} marginTop={10}>
              <Spinner alignSelf={"center"} color="white" size="xl" />
            </Flex>
          )}
          {/* <TodaysGames
            setTeamName={setTeamName}
            setSelectedTeam={setSelectedTeam}
            games={games}
          /> */}
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 8, lg: 8 }} rowSpan={{ base: 1, lg: 1 }}>
        <Flex justify={"center"} alignItems={"center"}>
          <Heading color={"white"} textAlign={"center"}>
            {selectedTeam ? `${teamName} Roster` : "MVP Ladder"}
          </Heading>

          {selectedTeam ? <CloseButton action={setSelectedTeam} /> : null}
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={{ base: 7, lg: 5 }}
        colSpan={{ base: 8, lg: 8 }}
        overflow={"auto"}
      >
        {selectedTeam ? (
          <Stats
            title={``}
            list={selectedTeam}
            rowNumber={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          />
        ) : mvpList ? (
          <Stats title={""} list={mvpList} rowNumber={[0, 1, 2, 3, 4]} />
        ) : (
          <Flex w={"100%"} justify={"center"} marginTop={10}>
            <Spinner alignSelf={"center"} color="white" size="xl" />
          </Flex>
        )}
    
      </GridItem>
    </>
  );
};

export default HomeContainer;
