import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import HomeContainer from "./HomeContainer";
import PlayerContainer from "./PlayerContainer";
import { Context } from "../context";
const GridContainer = () => {
  const [playerData, setPlayerData] = useState(null);

  return (
    <Context.Provider value={{ playerData, setPlayerData }}>
      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(8, 1fr)"
        padding={1}
      >
        <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 8, lg: 8 }}>
          <Header />
        </GridItem>
        {playerData ? <PlayerContainer /> : <HomeContainer />}
      </Grid>
    </Context.Provider>
  );
};

export default GridContainer;
