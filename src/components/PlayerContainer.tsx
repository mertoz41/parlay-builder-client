import React, { useState } from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Header from "./Header";
import StatTabs from "./StatTabs";
const PlayerContainer = () => {
  const [seasonStats, setSeasonStats] = useState(null);
  const [last5, setLast5] = useState(null);
  const [opp5, setOpp5] = useState(null);
  const [playerPic, setPlayerPic] = useState("");
  const [playerName, setPlayerName] = useState("");
  return (
    // <Box>
    <Grid
      h="100vh"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={8}
      margin={10}
    >
      <GridItem rowSpan={1} colSpan={8}>
        <Header
          setSeasonStats={setSeasonStats}
          setLast5={setLast5}
          setOpp5={setOpp5}
          setPlayerPic={setPlayerPic}
          setPlayerName={setPlayerName}
        />
      </GridItem>

      <GridItem rowSpan={4} colSpan={2}>
        {seasonStats ? (
          <PlayerCard
            pic={playerPic}
            seasonStats={seasonStats}
            playerName={playerName}
          />
        ) : null}
      </GridItem>
      <GridItem rowSpan={4} colSpan={6}>
        {opp5 ? <StatTabs last5={last5} lastOpp={opp5} /> : null}
        {/* {last5 ? <Stats list={last5} /> : null} */}
      </GridItem>
      {/* <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
        {opp5 ? <Stats list={opp5} /> : null}
      </GridItem> */}
      {/* <GridItem colSpan={4} bg='tomato' /> */}
      {/* 
        <Flex>
        {seasonStats ? (
          <PlayerCard
          pic={playerPic}
          seasonStats={seasonStats}
          playerName={playerName}
          />
          ) : null}
          <Box>
          {last5 ? <Stats list={last5} /> : null}
          {opp5 ? <Stats list={opp5} /> : null}
          </Box>
        </Flex> */}
    </Grid>
    // </Box>
  );
};

export default PlayerContainer;
