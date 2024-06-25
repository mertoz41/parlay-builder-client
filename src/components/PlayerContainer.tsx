import React, { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import PlayerCard from "./PlayerCard";
import Stats from "./Stats";
import { Context } from "../context";
const PlayerContainer = () => {
  const { playerData, last5opp } = useContext(Context);
  useEffect(() => {}, [last5opp]);
  const { seasonStats, last5 } = playerData;
  return (
    <Flex justifyContent={"space-between"} w={"100%"}>
      {seasonStats ? <PlayerCard /> : null}
      {last5opp ? (
        <Stats
          title={`Last 5 games against}`}
          list={last5opp}
          rowNumber={[0, 1, 2, 3, 4]}
        />
      ) : last5 ? (
        <Stats title="Last 5 games" list={last5} rowNumber={[0, 1, 2, 3, 4]} />
      ) : null}
    </Flex>
  );
};

export default PlayerContainer;
