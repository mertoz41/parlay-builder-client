import React, { useContext } from "react";
import { GridItem } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Stats from "./Stats";
import { Context } from "../context";
const PlayerContainer = () => {
  const { playerData } = useContext(Context);
  const { seasonStats, last5 } = playerData;
  return (
    <>
      <GridItem rowSpan={{ base: 1, lg: 8 }} colSpan={{ base: 8, lg: 2 }}>
        {seasonStats ? <PlayerCard /> : null}
      </GridItem>
      <GridItem rowSpan={{ base: 1, lg: 4 }} colSpan={{ base: 8, lg: 6 }}>
        {last5 ? (
          <Stats
            title="Last 5 games"
            list={last5}
            rowNumber={[0, 1, 2, 3, 4]}
          />
        ) : null}
      </GridItem>
      {/* <GridItem rowSpan={{ base: 1, lg: 4 }} colSpan={{ base: 8, lg: 6 }}>
        {last5opp ? (
          <Stats
            title={`Last 5 games against ${next_opponent[1]}`}
            list={last5opp}
            rowNumber={[0, 1, 2, 3, 4]}
          />
        ) : null}
      </GridItem> */}
    </>
  );
};

export default PlayerContainer;
