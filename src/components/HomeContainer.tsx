import React, { useEffect, useState } from "react";
import TodaysGames from "./TodaysGames";
import axios from "axios";
import Stats from "./Stats";
import { GridItem, Heading, Flex, CloseButton, Grid } from "@chakra-ui/react";
const HomeContainer = () => {
  useEffect(() => {
    getGames();
  }, []);
  const [games, setGames] = useState<[]>([]);
  const [mvpList, setMvpList] = useState<any>(null);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamName, setTeamName] = useState<string>("");
  const getGames = () => {
    axios
      .get(
        "http://localhost:8000/parlaybuilder/",
        //   "https://parlay-builder-7466f23832fc.herokuapp.com/parlaybuilder/",

        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resp: any) => {
        setMvpList(resp.data.mvp_list);
        setGames(resp.data.todays_games);
      });
  };
  return (
    <>
      <GridItem
        rowSpan={{ base: 5, lg: 4 }}
        colSpan={{ base: 8, lg: 8 }}
        overflow={"auto"}
      >
        <Flex overflow={"auto"}>
          <TodaysGames
            setTeamName={setTeamName}
            setSelectedTeam={setSelectedTeam}
            games={games}
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 8, lg: 8 }} rowSpan={{ base: 5, lg: 1 }}>
        <Flex justify={"center"}>
          <Heading color={"white"}>
            {selectedTeam ? `${teamName} roster` : "MVP Ladder"}
          </Heading>
          {selectedTeam ? (
            <CloseButton
              onClick={() => setSelectedTeam(null)}
              size={"lg"}
      
              alignSelf={"center"}
              marginLeft={5}
              color={"white"}
              backgroundColor={"#4F5175"}
            />
          ) : null}
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={{ base: 1, lg: 4 }}
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
        ) : null}
      </GridItem>
    </>
  );
};

export default HomeContainer;
