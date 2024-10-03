import React, { useEffect, useState } from "react";
import TodaysGames from "./TodaysGames";
import axios from "axios";
import Stats from "./Stats";
import { GridItem, Grid, Text, Heading, Spinner, Flex } from "@chakra-ui/react";
import CloseButton from "./CloseButton";
import AllTeams from "./AllTeams";
import { API_ROOT } from "../utils";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import TeamRoster from "./TeamRoster";
const HomeContainer = () => {
  useEffect(() => {
    // getGames();
  }, []);
  const [mvpList, setMvpList] = useState<any>(null);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [playerData, setPlayerData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [last5opp, setLast5opp] = useState<any>();
  const [showLast5, setShowLast5] = useState<boolean>(true);

  const getGames = () => {
    axios
      .get(API_ROOT, {
        headers: { "Content-Type": "application/json" },
      })
      .then((resp: any) => {
        console.log(resp.data.mvp_list);
        setMvpList(resp.data.mvp_list);
      })
      .catch((error) => {
        console.log(error);
      });
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
  const renderLeftSide = () => (
    <GridItem rowSpan={{ base: 1, lg: 13 }} colSpan={{ base: 8, lg: 4 }}>
      <Heading color={"white"} textAlign={"center"}>
        All Teams
      </Heading>
      <Heading color={"white"} textAlign={"center"} fontSize={20}>
        Select a team to display the roster
      </Heading>
      <AllTeams
        setLoading={setLoading}
        setTeamName={setTeamName}
        setSelectedTeam={setSelectedTeam}
        teamName={teamName}
        playerData={playerData}
        setLast5opp={setLast5opp}
        setShowLast5={setShowLast5}
      />
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
      {renderLeftSide()}
      {playerData ? (
        <PlayerContainer
          playerData={playerData}
          last5opp={last5opp}
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
        // <GridItem
        //   backgroundColor={"red"}
        //   rowSpan={{ base: 1, lg: 12 }}
        //   colSpan={{ base: 8, lg: 4 }}
        // >
        //   <Stats
        //     title={``}
        //     list={selectedTeam}
        //     rowNumber={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        //     setLoading={setLoading}
        //     setPlayerData={setPlayerData}
        //   />
        // </GridItem>
        <>
          <GridItem
            backgroundColor={"red"}
            rowSpan={{ base: 1, lg: 6 }}
            colSpan={{ base: 8, lg: 4 }}
          >
            <TodaysGames />
          </GridItem>
          <GridItem
            color="white"
            rowSpan={{ base: 1, lg: 6 }}
            colSpan={{ base: 8, lg: 4 }}
          >
            <Heading textAlign={"center"}>MVP Ladder</Heading>
            <Text textAlign={"center"} fontSize={23}>
              MVP Ladder will be displayed here once season starts
            </Text>
          </GridItem>
        </>
      )}

      {/* {playerData ? (
          <PlayerContainer
            playerData={playerData}
            last5opp={last5opp}
            showLast5={showLast5}
            setShowLast5={setShowLast5}
            setLoading={setLoading}
            setPlayerData={setPlayerData}
          />
        ) : selectedTeam ? (
          <Stats
            title={``}
            list={selectedTeam}
            rowNumber={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
            setLoading={setLoading}
            setPlayerData={setPlayerData}
          />
        ) : mvpList ? (
          <Stats
            title={""}
            setLoading={setLoading}
            setPlayerData={setPlayerData}
            list={mvpList}
            rowNumber={[0, 1, 2, 3, 4]}
          />
        ) : (
          <Flex w={"100%"} justify={"center"} marginTop={10}>
            <Spinner alignSelf={"center"} color="white" size="xl" />
          </Flex>
        )} */}

      {/* {renderTopSection()}
      {renderBottomTitleSection()}
      {renderBottomSection()} */}
    </Grid>
  );
};

export default HomeContainer;
