import React, { useState } from "react";
import TodaysGames from "./TodaysGames";
import { GridItem, Grid, Text, Heading, Flex } from "@chakra-ui/react";
import AllTeams from "./AllTeams";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import TeamRoster from "./TeamRoster";
const HomeContainer = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [playerData, setPlayerData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [last5opp, setLast5opp] = useState<any>();
  const [showLast5, setShowLast5] = useState<boolean>(true);

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
    <GridItem
      rowSpan={{ base: 8, lg: 13 }}
      colSpan={{ base: 8, lg: 4 }}
      overflow={"auto"}
    >
      <Heading color={"white"} textAlign={"center"}>
        All Teams
      </Heading>
      <Heading color={"white"} textAlign={"center"} fontSize={20}>
        {playerData
          ? `Select a team to see ${playerData.fullName}'s last 5 games against them`
          : "Select a team to display the roster"}
      </Heading>
      <Flex>
        <AllTeams
          setLoading={setLoading}
          setTeamName={setTeamName}
          setSelectedTeam={setSelectedTeam}
          teamName={teamName}
          playerData={playerData}
          setLast5opp={setLast5opp}
          setShowLast5={setShowLast5}
        />
      </Flex>
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
          <GridItem rowSpan={{ base: 3, lg: 6 }} colSpan={{ base: 8, lg: 4 }}>
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
    </Grid>
  );
};

export default HomeContainer;
