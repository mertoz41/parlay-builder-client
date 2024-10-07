import React from "react";
import { Box, Flex, Heading, Button, GridItem } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Stats from "./Stats";
const PlayerContainer = ({
  playerData,
  last5opp,
  showLast5,
  setShowLast5,
  setLoading,
  setPlayerData,
  setLast5opp,
}: {
  playerData: any;
  last5opp: any;
  showLast5: boolean;
  setShowLast5: any;
  setLoading: any;
  setPlayerData: any;
  setLast5opp: any
}) => {
  const clearPlayer = () => {
    setPlayerData(null)
    setLast5opp(null)
  }
  const { seasonStats, last5 } = playerData;
  return (
    <GridItem
      color={"white"}
      rowSpan={{ base: 1, lg: 9 }}
      colSpan={{ base: 8, lg: 4 }}
    >
      {seasonStats ? <PlayerCard clearPlayer={clearPlayer} playerData={playerData} /> : null}
      <Box height={"100%"}>
        <Flex color="white" justifyContent={"space-around"}>
          <Button
            borderRadius={0}
            color="white"
            onClick={() => setShowLast5(true)}
            flex={1}
            backgroundColor={showLast5 ? "#595a6b" : "transparent"}
            _hover={{ backgroundColor: "black" }}
          >
            <Heading
              fontSize={{ base: 18, lg: 25 }}
              textAlign={"center"}
              cursor={"pointer"}
            >
              last 5 games
            </Heading>
          </Button>
          <Button
            borderRadius={0}
            color="white"
            flex={1}
            onClick={() => setShowLast5(false)}
            isDisabled={!last5opp}
            backgroundColor={showLast5 ? "transparent" : "#595a6b"}
            _hover={{ backgroundColor: "black" }}
          >
            <Heading
              fontSize={{ base: 18, lg: 25 }}
              textAlign={"center"}
              cursor={"pointer"}
            >
              {!last5opp
                ? "select a team"
                : `last 5 vs ${last5opp.teamName.split(" ").pop()}`}
            </Heading>
          </Button>
        </Flex>
        {last5opp && !showLast5 ? (
          <Stats
            title={`Last 5 games against`}
            list={last5opp.stats}
            rowNumber={[0, 1, 2, 3, 4]}
            setLoading={setLoading}
            setPlayerData={setPlayerData}
          />
        ) : last5 ? (
          <Stats
            title="Last 5 games"
            list={last5}
            rowNumber={[0, 1, 2, 3, 4]}
            setLoading={setLoading}
            setPlayerData={setPlayerData}
          />
        ) : null}
      </Box>
    </GridItem>
  );
};

export default PlayerContainer;
