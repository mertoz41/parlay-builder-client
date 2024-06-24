import React from "react";
import { Box, Spinner, Text, Image, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { API_ROOT, getTeamPlayers } from "../utils";

// const teams = [
//   {
//     name: "Boston Celtics",
//     img: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
//   },
//   {
//     name: "Brooklyn Nets",
//     img: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
//   },
//   {
//     name: "New York Knicks",
//     img: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
//   },
//   {
//     name: "Philadelphia 76ers",
//     img: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
//   },
//   {
//     name: "Toronto Raptors",
//     img: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
//   },
//   {
//     name: "Chicago Bulls",
//     img: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
//   },
//   {
//     name: "Cleveland Cavaliers",
//     img: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
//   },
//   {
//     name: "Detroit Pistons",
//     img: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
//   },
//   {
//     name: "Indiana Pacers",
//     img: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
//   },
//   {
//     name: "Milwaukee Bucks",
//     img: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
//   },
//   {
//     name: "Atlanta Hawks",
//     img: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
//   },
//   {
//     name: "Charlotte Hornets",
//     img: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
//   },
//   {
//     name: "Miami Heat",
//     img: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
//   },
//   {
//     name: "Orlando Magic",
//     img: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
//   },
//   {
//     name: "Washington Wizards",
//     img: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
//   },
//   {
//     name: "Denver Nuggets",
//     img: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
//   },
//   {
//     name: "Minnesota Timberwolves",
//     img: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
//   },
//   {
//     name: "Oklahoma City Thunder",
//     img: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
//   },
//   {
//     name: "Portland Trail Blazers",
//     img: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
//   },
//   {
//     name: "Utah Jazz",
//     img: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
//   },
//   {
//     name: "Golden State Warriors",
//     img: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
//   },
//   {
//     name: "LA Clippers",
//     img: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
//   },
//   {
//     name: "Los Angeles Lakers",
//     img: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
//   },
//   {
//     name: "Phoenix Suns",
//     img: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
//   },
//   {
//     name: "Sacramento Kings",
//     img: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
//   },
//   {
//     name: "Dallas Mavericks",
//     img: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
//   },
//   {
//     name: "Houston Rockets",
//     img: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
//   },
//   {
//     name: "Memphis Grizzlies",
//     img: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
//   },
//   {
//     name: "New Orleans Pelicans",
//     img: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
//   },
//   {
//     name: "San Antonio Spurs",
//     img: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
//   },
// ];

const AllTeams = ({
  teams,
  setSelectedTeam,
  setTeamName,
}: {
  teams: any;
  setSelectedTeam: (table: any) => void;
  setTeamName: (team: string) => void;
}) => {
  const getTeamRoster = async (name: string) => {
    const teamInfo = await getTeamPlayers(name);
    setTeamName(name);
    setSelectedTeam(teamInfo.roster);
  };
  return (
    <Box>
      <Flex flexWrap={"wrap"}>
        {teams.map((team:any, i:number) => (
          <Box
            cursor={"pointer"}
            key={i}
            onClick={() => getTeamRoster(team.name)}
          >
            <Image alt="homepic" w={95} height={95} m="0 auto" src={team.img} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default AllTeams;
