import React, { useContext } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Stats from "./Stats";
import { Context } from "../context";
const PlayerContainer = () => {
  const { playerData, last5opp, showLast5, setShowLast5 } = useContext(Context);
  const { seasonStats, last5 } = playerData;

  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={{ base: "column", lg: "row" }}
      w={"100%"}
      borderTopWidth={1}
    >
      {seasonStats ? <PlayerCard /> : null}
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
                ? "Select a team to see last 5"
                : `last 5 vs ${last5opp.teamName.split(" ").pop()}`}
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
