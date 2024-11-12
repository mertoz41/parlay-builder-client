import React, { useState, useEffect } from "react";
import TodaysGames from "./TodaysGames";
import { GridItem, Grid, Heading } from "@chakra-ui/react";
import AllTeams from "./AllTeams";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import TeamRoster from "./TeamRoster";
import Stats from "./Stats";
import { API_ROOT } from "../utils";
import axios from "axios";
import Loading from "./Loading";
const HomeContainer = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [playerData, setPlayerData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [last5opp, setLast5opp] = useState<any>();
  const [showLast5, setShowLast5] = useState<boolean>(true);
  const [allTeams, setAllTeams] = useState([]);
  const [mvpList, setMvpList] = useState(null);
  const [todaysGames, setTodaysGames] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        API_ROOT,

        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resp: any) => {
        setTodaysGames(resp.data.todays_games);
        setMvpList(resp.data.mvp_list);
        setAllTeams(resp.data.all_teams);
      })
      .catch((error) => console.log(error.message));
  };

  const renderHeader = () => (
    <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 8, lg: 8 }}>
      <Header
        setPlayerData={setPlayerData}
        setLast5opp={setLast5opp}
        setShowLast5={setShowLast5}
        loading={loading}
      />
    </GridItem>
  );

  const renderMvpSection = () => (
    <GridItem rowSpan={{ base: 8, lg: 6 }} colSpan={{ base: 8, lg: 8 }}>
      <Heading textAlign={"center"} color={"white"}>
        MVP Ladder
      </Heading>
      {mvpList ? (
        <Stats
          list={mvpList}
          rowNumber={[0, 1, 2, 3, 4]}
          setLoading={setLoading}
          setPlayerData={setPlayerData}
        />
      ) : (
        <Loading website="www.basketball-reference.com" />
      )}
    </GridItem>
  );
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="repeat(14, 1fr)"
      templateColumns="repeat(8, 1fr)"
    >
      {renderHeader()}
      <AllTeams
        teams={allTeams}
        setLoading={setLoading}
        setTeamName={setTeamName}
        setSelectedTeam={setSelectedTeam}
        teamName={teamName}
        playerData={playerData}
        setLast5opp={setLast5opp}
        setShowLast5={setShowLast5}
      />

      {playerData ? (
        <PlayerContainer
          playerData={playerData}
          last5opp={last5opp}
          setLast5opp={setLast5opp}
          showLast5={showLast5}
          setShowLast5={setShowLast5}
          setLoading={setLoading}
          setPlayerData={setPlayerData}
        />
      ) : selectedTeam ? (
        <TeamRoster
          list={selectedTeam}
          setTeamName={setTeamName}
          setLoading={setLoading}
          setPlayerData={setPlayerData}
          setSelectedTeam={setSelectedTeam}
          name={teamName}
        />
      ) : (
        <>
          <TodaysGames
            setTeamName={setTeamName}
            setSelectedTeam={setSelectedTeam}
            games={todaysGames}
            setLoading={setLoading}
          />
          {renderMvpSection()}
        </>
      )}
    </Grid>
  );
};

export default HomeContainer;
