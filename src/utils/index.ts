import axios from "axios";

export const API_ROOT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/parlaybuilder/"
    : "https://parlay-builder-7466f23832fc.herokuapp.com/parlaybuilder/";

export const getPlayerStats = async (name: string) => {
  return await axios
    .post(
      API_ROOT,
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

export const getTeamPlayers = async (team: string) => {
  let mascot = team.split(" ").pop();
  return await axios
    .get(`${API_ROOT}get_team/${teamAbbreviations[`${mascot}`]}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((resp: any) => {
      return { teamName: resp.data.team_name, roster: resp.data.roster };
    });
};

export const getOpponentStats = async (
  firstName: string,
  lastName: string,
  team: string
) => {
  return await axios
    .post(
      `${API_ROOT}get_opponent_stats/`,
      {
        first: firstName.toLowerCase(),
        last: lastName.toLowerCase(),
        team: team.split(" ").pop()?.toLowerCase(),
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((resp: any) => {
      return resp.data.opp_stats;
      
    })
    .catch((error) => {
      alert("error occured while fetching this data.")
    });
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
  // let oppAvgPts = returnAverage(data.last5opp.PTS);
  let fiveAvgReb = returnAverage(data.last5.REB);
  // let oppAvgReb = returnAverage(data.last5opp.REB);
  let fiveAvgAst = returnAverage(data.last5.AST);
  // let oppAvgAst = returnAverage(data.last5opp.AST);
  let playerAverages = {
    regularSeason: data.season_stats,
    last5: { pts: fiveAvgPts, reb: fiveAvgReb, assist: fiveAvgAst },
    // last5Opp: { pts: oppAvgPts, reb: oppAvgReb, assist: oppAvgAst },
  };
  return playerAverages;
};

const teamAbbreviations: any = {
  Hawks: "ATL",
  Celtics: "BOS",
  Nets: "BRK",
  Hornets: "CHO",
  Bulls: "CHI",
  Cavaliers: "CLE",
  Mavericks: "DAL",
  Nuggets: "DEN",
  Pistons: "DET",
  Warriors: "GSW",
  Rockets: "HOU",
  Pacers: "IND",
  Clippers: "LAC",
  Lakers: "LAL",
  Grizzlies: "MEM",
  Heat: "MIA",
  Bucks: "MIL",
  Timberwolves: "MIN",
  Pelicans: "NOP",
  Knicks: "NYK",
  Magic: "ORL",
  Thunder: "OKC",
  "76ers": "PHI",
  Suns: "PHO",
  Blazers: "POR",
  Spurs: "SAS",
  Kings: "SAC",
  Raptors: "TOR",
  Jazz: "UTA",
  Wizards: "WAS",
};
