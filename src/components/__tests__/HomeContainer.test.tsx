import { render, screen , waitFor} from "@testing-library/react";
import HomeContainer from "../HomeContainer";
import axios from "axios";
jest.mock("axios");
const dummyTeamList = [
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
  {
    name: "Atlanta Hawks",
  },
];
describe("Home Container", () => {
  test("it renders", async () => {
    // // axios.get.mockResolvedValue({data: dummyTeamList})
    // render(<HomeContainer />);
    // // const teamList = await waitFor(() => screen.findAllByTestId('team-item'))
    // // expect(teamList).toHaveLength(10)
    // expect(screen.getByText("All Teams")).toBeInTheDocument();
    // // axios.get.mockResolvedValue({
    //   data: dummyTeamList,
    // });

    // const rtl = render(<HomeContainer />);
    // // console.log(rtl);
    // expect(axios.get).toHaveBeenCalled();
    // console.log(screen)

    // // expect(rtl).getByText("MVP Ladder").toBeTruthy();
    // render(<HomeContainer />);
    // const allTeamsText = screen.getByText("All Teams");
    // expect(allTeamsText).toBeInTheDocument();
    // const mvpListTitle = screen.getByText("MVP Ladder");
    // expect(mvpListTitle).toBeInTheDocument();
  });
});
