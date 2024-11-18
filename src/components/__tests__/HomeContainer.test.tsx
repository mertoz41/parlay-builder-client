// import { render, screen , waitFor} from "@testing-library/react";
// import HomeContainer from "../HomeContainer";
// import axios from "axios";
// jest.mock("axios");
// const dummyTeamList = [
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
//   {
//     name: "Atlanta Hawks",
//   },
// ];
// describe("Home Container", () => {
//   test("it renders", async () => {
//     // // axios.get.mockResolvedValue({data: dummyTeamList})
//     // render(<HomeContainer />);
//     // // const teamList = await waitFor(() => screen.findAllByTestId('team-item'))
//     // // expect(teamList).toHaveLength(10)
//     // expect(screen.getByText("All Teams")).toBeInTheDocument();
//     // // axios.get.mockResolvedValue({
//     //   data: dummyTeamList,
//     // });

//     // const rtl = render(<HomeContainer />);
//     // // console.log(rtl);
//     // expect(axios.get).toHaveBeenCalled();
//     // console.log(screen)

//     // // expect(rtl).getByText("MVP Ladder").toBeTruthy();
//     // render(<HomeContainer />);
//     // const allTeamsText = screen.getByText("All Teams");
//     // expect(allTeamsText).toBeInTheDocument();
//     // const mvpListTitle = screen.getByText("MVP Ladder");
//     // expect(mvpListTitle).toBeInTheDocument();
//   });
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import { Grid } from "@chakra-ui/react";
import AllTeams from "../AllTeams";
import PlayerContainer from "../PlayerContainer";
import TeamRoster from "../TeamRoster";
import TodaysGames from "../TodaysGames";

// Mock functions and data for testing
const renderHeader = jest.fn(() => <div>Header</div>);
const renderMvpSection = jest.fn(() => <div>MVP Section</div>);
const allTeams = [
  {
    name: "Boston Celtics",
    img: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
  },

  {
    name: "Brooklyn Nets",
    img: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
  },
]; // Replace with appropriate test data

const playerData = {
  img: "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
  last5: {
    "3PA": [4, 5, 3, 1, 3],
    "3PM": [3, 1, 1, 1, 3],
    AST: [9, 13, 16, 14, 15],
    BLK: [0, 2, 2, 0, 0],
    Date: ["11/2/2024", "11/4/2024", "11/6/2024", "11/8/2024", "11/10/2024"],
    FGA: [18, 22, 20, 13, 21],
    FGM: [10, 10, 9, 11, 13],
    MIN: [30, 38, 39, 40, 38],
    OPP: ["UTA", "TOR", "OKC", "MIA", "DAL"],
    PTS: [27, 28, 23, 30, 37],
    REB: [16, 14, 20, 11, 18],
    STL: [1, 1, 2, 2, 3],
  },
}; // Set this for different test cases
const selectedTeam = null; // Set this for different test cases
const todaysGames = [
  [
    "CHA",
    "https://b.fssta.com/uploads/application/nba/team-logos/Hornets.vresize.72.72.medium.0.png",
    "ORL",
    "https://b.fssta.com/uploads/application/nba/team-logos/Magic.vresize.72.72.medium.0.png",
    "12:00AM\n        FDSN-FL",
  ],
  [
    "MIA",
    "https://b.fssta.com/uploads/application/nba/team-logos/Heat.vresize.72.72.medium.0.png",
    "DET",
    "https://b.fssta.com/uploads/application/nba/team-logos/Pistons.vresize.72.72.medium.0.png",
    "12:00AM\n        FDSN-DET",
  ],
]; // Replace with appropriate test data
const setLoading = jest.fn();
const setTeamName = jest.fn();
const setSelectedTeam = jest.fn();
const setLast5opp = jest.fn();
const setShowLast5 = jest.fn();
const setPlayerData = jest.fn();
const teamName = "";
const last5opp = {};
const showLast5 = false;

describe("HomeContainer", () => {
  it("should render the header and AllTeams component", () => {
    render(
      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(14, 1fr)"
        templateColumns="repeat(8, 1fr)"
      >
        {renderHeader()}
        <AllTeams
          teams={allTeams}
          setLoading={setLoading}
          setTeamName={setTeamName}
          setSelectedTeam={setSelectedTeam}
          teamName={teamName}
          playerData={playerData}
          setLast5opp={setLast5opp}
          setShowLast5={setShowLast5}
        />
      </Grid>
    );

    expect(screen.getByText("NBA STATS SCRAPER")).toBeInTheDocument();
    expect(screen.getByText("All Teams")).toBeInTheDocument(); // Adjust if AllTeams renders specific text
  });

  it("should render PlayerContainer when playerData is available", () => {
    render(
      <Grid>
        <PlayerContainer
          playerData={playerData}
          last5opp={last5opp}
          setLast5opp={setLast5opp}
          showLast5={showLast5}
          setShowLast5={setShowLast5}
          setLoading={setLoading}
          setPlayerData={setPlayerData}
        />
      </Grid>
    );

    expect(screen.getByText(/test player/i)).toBeInTheDocument();
  });

  // it("should render TeamRoster when selectedTeam is available", () => {
  //   render(
  //     <Grid>
  //       <TeamRoster
  //         list={[{ name: "Team A" }]}
  //         setTeamName={setTeamName}
  //         setLoading={setLoading}
  //         setPlayerData={setPlayerData}
  //         setSelectedTeam={setSelectedTeam}
  //         name="Team A"
  //       />
  //     </Grid>
  //   );

  //   expect(screen.getByText(/team a/i)).toBeInTheDocument();
  // });

  // it("should render TodaysGames and MVP section when no playerData or selectedTeam", () => {
  //   render(
  //     <Grid>
  //       <TodaysGames
  //         setTeamName={setTeamName}
  //         setSelectedTeam={setSelectedTeam}
  //         games={todaysGames}
  //         setLoading={setLoading}
  //       />
  //       {renderMvpSection()}
  //     </Grid>
  //   );

  //   expect(screen.getByText(/todays games/i)).toBeInTheDocument(); // Adjust based on actual rendered text
  //   expect(screen.getByText(/mvp section/i)).toBeInTheDocument();
  // });
});
