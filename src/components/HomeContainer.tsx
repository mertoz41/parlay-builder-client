import React, { useState } from "react";
import TodaysGames from "./TodaysGames";
import { GridItem, Grid, Text, Heading, Flex } from "@chakra-ui/react";
import AllTeams from "./AllTeams";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import TeamRoster from "./TeamRoster";
import MvpList from "./MvpList";
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
      rowSpan={{ base: 8, lg: 2 }}
      colSpan={{ base: 8, lg: 8 }}
      // overflow={"auto"}
    >
      <Flex>
        <Flex flex={1} alignSelf={"center"} justifyContent={"center"}>
          <Heading color={"white"}>All Teams</Heading>
          {/* <Heading color={"white"} textAlign={"center"} fontSize={20}>
          {playerData
          ? `Select a team to see ${playerData.fullName}'s last 5 games against them`
          : "Select a team to display the roster"}
          </Heading> */}
        </Flex>
        <Flex flex={4} justifyContent={"center"} alignItems={"center"}>
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
          <GridItem rowSpan={{ base: 3, lg: 14 }} colSpan={{ base: 8, lg: 8 }}>
            <Flex flex={1}>
              <Flex flex={1}>
                <TodaysGames />
              </Flex>
              <Flex flex={1} flexDirection={"column"}>
                <Heading textAlign={"center"}>MVP Ladder</Heading>

                <MvpList
                  setPlayerData={setPlayerData}
                  setLoading={setLoading}
                />
              </Flex>
            </Flex>
          </GridItem>
          {/* <GridItem rowSpan={{ base: 3, lg: 6 }} colSpan={{ base: 8, lg: 4 }} backgroundColor={"red"}>
          </GridItem>
          <GridItem
            color="white"
            rowSpan={{ base: 1, lg: 6 }}
            backgroundColor={"green"}
            colSpan={{ base: 8, lg: 4 }}
          >
            <Heading textAlign={"center"}>MVP Ladder</Heading>

            <MvpList setPlayerData={setPlayerData} setLoading={setLoading} />
          </GridItem> */}
        </>
      )}
    </Grid>
  );
};

export default HomeContainer;
