import React, { useEffect, useState } from "react";
import TodaysGames from "./TodaysGames";
import axios from "axios";
import Stats from "./Stats";
import { GridItem, Grid, Heading, Spinner, Flex } from "@chakra-ui/react";
import CloseButton from "./CloseButton";
import AllTeams from "./AllTeams";
import { API_ROOT } from "../utils";
import { Context } from "../context";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
const HomeContainer = () => {
  useEffect(() => {
    getGames();
  }, []);
  const [games, setGames] = useState<[]>([]);
  const [mvpList, setMvpList] = useState<any>(null);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [teams, setTeams] = useState<[]>([]);
  const [playerData, setPlayerData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [last5opp, setLast5opp] = useState<any>();
  const [showLast5, setShowLast5] = useState<boolean>(true);

  const getGames = () => {
    axios
      .get(API_ROOT, {
        headers: { "Content-Type": "application/json" },
      })
      .then((resp: any) => {
        setTeams(resp.data.all_teams);
        setMvpList(resp.data.mvp_list);
        setGames(resp.data.todays_games);
      });
  };

  const renderTopSection = () => (
    <>
      <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 8, lg: 8 }}>
        <Heading color={"white"} textAlign={"center"}>
          All Teams
        </Heading>
      </GridItem>
      <GridItem
        rowSpan={{ base: 4, lg: 4 }}
        colSpan={{ base: 8, lg: 8 }}
        overflow={"auto"}
      >
        <Flex>
          {teams.length ? (
            <AllTeams teams={teams} />
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
    </>
  );

  const renderBottomSection = () => (
    <GridItem
      rowSpan={{ base: 9, lg: 6 }}
      colSpan={{ base: 8, lg: 8 }}
      overflow={"auto"}
    >
      {playerData ? (
        <PlayerContainer />
      ) : selectedTeam ? (
        <>
          <Flex justifyContent={"center"}>
            <Heading color={"white"} textAlign={"center"}>
              {teamName} Roster
            </Heading>
            <CloseButton action={setSelectedTeam} />
          </Flex>
          <Stats
            title={``}
            list={selectedTeam}
            rowNumber={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          />
        </>
      ) : mvpList ? (
        <>
          <Flex justify={"center"}>
            <Heading color={"white"} textAlign={"center"}>
              {"MVP Ladder"}
            </Heading>
          </Flex>
          <Stats title={""} list={mvpList} rowNumber={[0, 1, 2, 3, 4]} />
        </>
      ) : (
        <Flex w={"100%"} justify={"center"} marginTop={10}>
          <Spinner alignSelf={"center"} color="white" size="xl" />
        </Flex>
      )}
    </GridItem>
  );
  return (
    <Context.Provider
      value={{
        playerData,
        setPlayerData,
        loading,
        setLoading,
        setTeamName,
        teamName,
        setSelectedTeam,
        setLast5opp,
        last5opp,
        setShowLast5,
        showLast5,
      }}
    >
      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(14, 1fr)"
        templateColumns="repeat(8, 1fr)"
      >
        <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 8, lg: 8 }}>
          <Header />
        </GridItem>
        {renderTopSection()}
        {renderBottomSection()}
      </Grid>
    </Context.Provider>
  );
};

export default HomeContainer;
