import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import axios from "axios";

const PlayerSearch = ({
  setSeasonStats,
  setLast5,
  setPlayerPic,
  setPlayerName,
  setOpp5,
  setNextOpponent,
}: {
  setSeasonStats: any;
  setOpp5: any;
  setLast5: any;
  setPlayerPic: any;
  setPlayerName: any;
  setNextOpponent: any;
}) => {
  const [fullName, setFullName] = useState("");
  const searchPlayer = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "https://parlay-builder-7466f23832fc.herokuapp.com/parlaybuilder/",
        {
          player: fullName,
        },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      )
      .then((resp) => {
        setNextOpponent(resp.data.next_opponent);
        setOpp5(resp.data.last5opp);
        setLast5(resp.data.last5);
        getSeasonStats(resp.data);
        setPlayerPic(resp.data.img);
        setPlayerName(fullName);
      });
  };

  const getSeasonStats = (data: any) => {
    const returnAverage = (arr: any) => {
      let stringToNum = arr.map(Number);
      let num = 0;
      for (let i = 0; i < stringToNum.length; i++) {
        num += stringToNum[i];
      }
      return num / 5;
    };
    let fiveAvgPts = returnAverage(data.last5.PTS);
    let oppAvgPts = returnAverage(data.last5opp.PTS);
    let fiveAvgReb = returnAverage(data.last5.REB);
    let oppAvgReb = returnAverage(data.last5opp.REB);
    let fiveAvgAst = returnAverage(data.last5.AST);
    let oppAvgAst = returnAverage(data.last5opp.AST);
    let playerAverages = {
      regularSeason: data.season_stats,
      last5: { pts: fiveAvgPts, reb: fiveAvgReb, assist: fiveAvgAst },
      last5Opp: { pts: oppAvgPts, reb: oppAvgReb, assist: oppAvgAst },
    };
    setSeasonStats(playerAverages);
  };
  return (
    <Flex>
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Player Name"
        bg="#5f618d"
      />

      <Button paddingX={5} onClick={(e) => searchPlayer(e)} marginLeft={5}>
        Get stats
      </Button>
    </Flex>
  );
};

export default PlayerSearch;
