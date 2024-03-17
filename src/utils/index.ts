import axios from "axios";

export const getPlayerStats = async (name: string) => {
  return await axios
    .post(
      "http://localhost:8000/parlaybuilder/",
      // "https://parlay-builder-7466f23832fc.herokuapp.com/parlaybuilder/",
      {
        player: name.toLowerCase(),
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((resp) => {
      return { ...resp.data, seasonStats: getSeasonStats(resp.data) };
    });
  // add .catch error handling
};

export const getSeasonStats = (data: any) => {
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
  return playerAverages;
};
