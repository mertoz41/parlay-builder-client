import { render, renderHook, screen, waitFor } from "@testing-library/react";
import AllTeams from "../AllTeams";
import axios from "axios";
import { Context } from "../../context";
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

// describe("true is truthy and false is falsy", () => {
//   test("true is truthy", () => {
//     expect(true).toBe(true);
//   });
//   test("false is falsy", () => {
//     expect(false).toBe(false);
//   });
// });

describe("all teams component", () => {
  test("displays all teams", async () => {
    axios.get.mockResolvedValue({ data: dummyTeamList });
    render(
      <Context.Provider {...props}>
        <AllTeams />
      </Context.Provider>
    );
    const teamList = await waitFor(() => screen.findAllByTestId("team-item"));
    console.log(teamList);
    expect(teamList).toHaveLength(10);
  });
});
// describe(AllTeams, () => {
//   //   let mockedData;

//   //   beforeEach(() => {
//   //     mockedData = [
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //       {
//   //         name: "Atlanta Hawks",
//   //       },
//   //     ];
//   //     axios.get.mockResolvedvalue({mockedData})
//   //   });
//   //   it("should return data", async () => {
//   //     const {result} = renderHook(() => useFetchedData())
//   //   })
//   //   it("should display 30 teams when page is loaded", () => {
//   //     axios.get.mockResolvedValue({ data: dummyTeamList });
//   //     const element = screen.getByTestId("teams");
//   //     // console.log(element)
//   //     // return AllTeams.all().then((data: any) => expect(data).toEqual(dummyTeamList));
//   //     // const { getAllByTitle } = render(<AllTeams teams={[]} />);
//   //     // const teamsContainer = getAllByTitle("teams");
//   //     // expect(teamsContainer).toHaveLength(0);
//   //   });
//     test("experimenting", async() => {
//         render(<AllTeams teams={dummyTeamList}/>)
//     })
// //   test("mock returned api data", async () => {
// //     axios.get.mockResolvedValue({
// //         data: dummyTeamList
// //     })

// //     const rtl = render(<AllTeams teams={dummyTeamList} />);
// //     console.log(rtl)
// //   });
// });
