import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Header from "./Header";
import Stats from "./Stats";
const PlayerContainer = () => {
  const [seasonStats, setSeasonStats] = useState(null);
  const [last5, setLast5] = useState(null);
  const [opp5, setOpp5] = useState(null);
  const [playerPic, setPlayerPic] = useState("");
  const [playerName, setPlayerName] = useState("");
  return (
    <Grid
      h="100vh"
      templateRows="repeat(9, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
      padding={4}
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

      <GridItem rowSpan={8} colSpan={2}>
        {seasonStats ? (
          <PlayerCard
            pic={playerPic}
            seasonStats={seasonStats}
            playerName={playerName}
          />
        ) : null}
      </GridItem>
      <GridItem rowSpan={4} colSpan={6}>
        {last5 ? <Stats title="Last 5 games" list={last5} /> : null}
      </GridItem>
      <GridItem rowSpan={4} colSpan={6}>
        {opp5 ? <Stats title="Last 5 games against" list={opp5} /> : null}
      </GridItem>
    </Grid>
  );
};

export default PlayerContainer;
