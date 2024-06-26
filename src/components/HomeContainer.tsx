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

  const renderTitleSection = () => (
    // if playerdata is available, display nav bars,
    // one for last 5 games
    // the other that will say "Select a team from above to "
    <GridItem
      colSpan={{ base: 8, lg: 8 }}
      rowSpan={{ base: 2, lg: 1 }}
      alignContent={"center"}
    >
      <Flex justifyContent={"space-between"}>
        <Flex>
          <Heading color={"white"} textAlign={"center"}>
            {playerData
              ? playerData.fullName
              : selectedTeam
              ? `${teamName} Roster`
              : "MVP Ladder"}
          </Heading>
          {playerData ? (
            // must clear last5opp with this act
            <CloseButton action={setPlayerData} />
          ) : selectedTeam ? (
            <CloseButton action={setSelectedTeam} />
          ) : null}
        </Flex>
        <Flex color="white" flex={1} justifyContent={"space-around"}>
          <Heading>Last 5 games</Heading>
          <Heading>Select a team to see last 5 games</Heading>
        </Flex>
      </Flex>
    </GridItem>
  );

  const renderTopSection = () => (
    <GridItem
      rowSpan={{ base: 2, lg: 5 }}
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
  );
  const renderBottomSection = () => (
    <GridItem
      rowSpan={{ base: 7, lg: 6 }}
      colSpan={{ base: 8, lg: 8 }}
      overflow={"auto"}
    >
      {playerData ? (
        <PlayerContainer />
      ) : selectedTeam ? (
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
        showLast5
      }}
    >
      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={3}
      >
        <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 8, lg: 8 }}>
          <Header />
        </GridItem>
        {renderTopSection()}
        {/* {renderTitleSection()} */}
        {renderBottomSection()}
      </Grid>
    </Context.Provider>
  );
};

export default HomeContainer;
