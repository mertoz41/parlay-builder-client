import React, { useContext, useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Stats from "./Stats";
import { Context } from "../context";
const PlayerContainer = () => {
  const { playerData, last5opp, showLast5, setShowLast5 } = useContext(Context);
  const { seasonStats, last5 } = playerData;

  return (
    <Flex justifyContent={"space-between"} w={"100%"}>
      {seasonStats ? <PlayerCard /> : null}
      <Box borderWidth={1}>
        <Flex color="white" justifyContent={"space-around"}>
          <Button
            borderRadius={0}
            color="white"
            flex={1}
            backgroundColor={showLast5 ? "black" : "transparent"}
            _hover={{ backgroundColor: "#595a6b" }}
          >
            <Heading
              textAlign={"center"}
              cursor={"pointer"}
              onClick={() => setShowLast5(true)}
            >
              last 5 games
            </Heading>
          </Button>
          <Button
            borderRadius={0}
            color="white"
            flex={1}
            isDisabled={!last5opp}
            backgroundColor={showLast5 ? "transparent" : "black"}
            _hover={{ backgroundColor: "#595a6b" }}
          >
            <Heading
              onClick={() => setShowLast5(false)}
              textAlign={"center"}
              cursor={"pointer"}
            >
              {!last5opp ? "Select a team to see last 5" : `last 5 vs ${last5opp.teamName.split(' ').pop()}`}
            </Heading>
          </Button>
        </Flex>
        {last5opp && !showLast5 ? (
          <Stats
            title={`Last 5 games against`}
            list={last5opp.stats}
            rowNumber={[0, 1, 2, 3, 4]}
          />
        ) : last5 ? (
          <Stats
            title="Last 5 games"
            list={last5}
            rowNumber={[0, 1, 2, 3, 4]}
          />
        ) : null}
      </Box>
    </Flex>
  );
};

export default PlayerContainer;
