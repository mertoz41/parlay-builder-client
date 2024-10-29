import React, { useState, useEffect } from "react";
import TodaysGames from "./TodaysGames";
import {
  GridItem,
  Grid,
  Spinner,
  Heading,
  Flex,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import AllTeams from "./AllTeams";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import TeamRoster from "./TeamRoster";
import Stats from "./Stats";
import { API_ROOT } from "../utils";
import axios from "axios";

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
  const renderAllTeams = () => (
    <GridItem rowSpan={{ base: 2, lg: 2 }} colSpan={{ base: 8, lg: 8 }}>
      <Flex>
        <Flex flex={1} alignSelf={"center"} justifyContent={"center"}>
          <Heading color={"white"} fontSize={{ base: 20, xl: 40 }}>
            All Teams
          </Heading>
        </Flex>
        <Flex flex={4} justifyContent={"center"} alignItems={"center"}>
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
        </Flex>
      </Flex>
    </GridItem>
  );

  const renderMvpSection = () => (
    <Flex flex={1} flexDirection={"column"}>
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
        <Flex w={"100%"} justify={"center"} marginTop={10}>
          <Spinner alignSelf={"center"} color="white" size="xl" />
        </Flex>
      )}
    </Flex>
  );
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="repeat(14, 1fr)"
      templateColumns="repeat(8, 1fr)"
    >
      {/* <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert> */}
      {renderHeader()}
      {renderAllTeams()}
      <GridItem
        rowSpan={{ base: 8, lg: 11 }}
        colSpan={{ base: 8, lg: 8 }}
      >
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
          <Flex flexDirection={{ base: "column", xl: "row" }}>
            <TodaysGames
              setTeamName={setTeamName}
              setSelectedTeam={setSelectedTeam}
              games={todaysGames}
            />
            {renderMvpSection()}
          </Flex>
        )}
      </GridItem>
      {/* <GridItem
        rowSpan={{ base: 3, lg: 14 }}
        colSpan={{ base: 8, lg: 5 }}
        margin={{ base: 0, xl: 5 }}
      >

        
      </GridItem> */}
    </Grid>
  );
};

export default HomeContainer;
