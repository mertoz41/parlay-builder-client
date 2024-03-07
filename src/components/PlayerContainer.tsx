import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import LastFive from "./LastFive";
import PlayerCard from "./PlayerCard";
import Header from "./Header";
const PlayerContainer = () => {
  const [seasonStats, setSeasonStats] = useState(null);
  const [last5, setLast5] = useState(null);
  const [opp5, setOpp5] = useState(null);
  const [playerPic, setPlayerPic] = useState("");
  const [playerName, setPlayerName] = useState("");
  return (
    <Box>
      <Header
        setSeasonStats={setSeasonStats}
        setLast5={setLast5}
        setOpp5={setOpp5}
        setPlayerPic={setPlayerPic}
        setPlayerName={setPlayerName}
      />
      <Flex>
        {seasonStats ? (
          <PlayerCard
            pic={playerPic}
            seasonStats={seasonStats}
            playerName={playerName}
          />
        ) : null}
        <Box>
          {last5 ? <LastFive list={last5} /> : null}
          {opp5 ? <LastFive list={opp5} /> : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerContainer;
