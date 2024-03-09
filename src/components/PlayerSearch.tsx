import React, { useState } from "react";
import { Flex, Input, Button, Spinner } from "@chakra-ui/react";
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
  const [loading, setLoading] = useState(false);
  const searchPlayer = (e: any) => {
    e.preventDefault();
    if (fullName.length < 5){
      return alert("Type first name and last name")
    }
    setLoading(true);
    axios
      .post(
        // "http://localhost:8000/parlaybuilder/",
        "https://parlay-builder-7466f23832fc.herokuapp.com/parlaybuilder/",
        {
          player: fullName.toLowerCase(),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resp) => {
        if (resp.data.error) {
          alert(resp.data.error);
        } else {
          setNextOpponent(resp.data.next_opponent);
          setOpp5(resp.data.last5opp);
          setLast5(resp.data.last5);
          getSeasonStats(resp.data);
          setPlayerPic(resp.data.img);
          setPlayerName(fullName);
        }
        setLoading(false);
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
        placeholder="Player Full Name"
        color="white"
        fontSize={24}
        bg="#5f618d"
      />
      <Flex w={200} justifyContent={"center"}>
        {loading ? (
          <Spinner alignSelf={"center"} color="white" size="lg" />
        ) : (
          <Button paddingX={5} onClick={(e) => searchPlayer(e)} marginLeft={5}>
            Get stats
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default PlayerSearch;
