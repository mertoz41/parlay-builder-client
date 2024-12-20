import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { getPlayerStats } from "../utils";
const Stats = ({
  list,
  rowNumber,
  setLoading,
  setPlayerData,
}: {
  list: any;
  rowNumber: any;
  setLoading: any;
  setPlayerData: any;
}) => {
  const getStats = async (name: string) => {
    setLoading(true);
    let playerName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let stats = await getPlayerStats(playerName.toLowerCase());
    if (!stats.error) {
      setPlayerData({
        ...stats,
        fullName: name,
      });
    }
    setLoading(false);
  };
  const tableRow = (i: number) => {
    return (
      <Tr
        key={i}
        _hover={{ backgroundColor: "#4F5175" }}
        onClick={() => getStats(list.Player[i])}
        cursor={"pointer"}
      >
        {list.Rank ? <Td textAlign={"center"}>{list.Rank[i]}</Td> : null}
        {list.Player ? (
          <Td textAlign={"center"} _hover={{ textDecoration: "underline" }}>
            {list.Player[i]} {list.Team ? list.Team[i] : null}
          </Td>
        ) : null}
        {list.W ? <Td textAlign={"center"}>{list.W[i]}</Td> : null}
        {list.L ? <Td textAlign={"center"}>{list.L[i]}</Td> : null}

        {list.Date ? <Td textAlign={"center"}>{list.Date[i]}</Td> : null}
        {list.OPP ? <Td textAlign={"center"}>{list.OPP[i]}</Td> : null}
        {list.Result ? <Td textAlign={"center"}>{list.Result[i]}</Td> : null}

        {list.MIN ? <Td textAlign={"center"}>{list.MIN[i]}</Td> : null}
        <Td textAlign={"center"}>
          {list.FGM[i]}/{list.FGA[i]}
        </Td>
        <Td textAlign={"center"}>
          {list["3PM"][i]}/{list["3PA"][i]}
        </Td>
        <Td textAlign={"center"}>{list.STL[i]}</Td>
        <Td textAlign={"center"}>{list.BLK[i]}</Td>
        <Td textAlign={"center"}>{list.REB[i]}</Td>
        <Td textAlign={"center"}>{list.AST[i]}</Td>
        <Td textAlign={"center"}>{list.PTS[i]}</Td>
      </Tr>
    );
  };

  return (
    <Box>
      <Box overflowX={"auto"}>
        <Table size={"sm"} variant="simple" color="white">
          <Thead>
            <Tr>
              {list.Rank ? <Th textAlign={"center"}>Rank</Th> : null}
              {list.Player ? <Th textAlign={"center"}>Player</Th> : null}
              {list.W ? <Th textAlign={"center"}>W</Th> : null}
              {list.L ? <Th textAlign={"center"}>L</Th> : null}

              {list.Date ? <Th textAlign={"center"}>Date</Th> : null}
              {list.OPP ? <Th textAlign={"center"}>Opponent</Th> : null}
              {list.Result ? <Th textAlign={"center"}>Result</Th> : null}
              {list.MIN ? <Th textAlign={"center"}>MP</Th> : null}
              <Th textAlign={"center"}>FG/FGA</Th>
              <Th textAlign={"center"}>3P/3PA</Th>
              <Th textAlign={"center"}>Steal</Th>
              <Th textAlign={"center"}>Block</Th>
              <Th textAlign={"center"}>Rebound</Th>
              <Th textAlign={"center"}>Assists</Th>
              <Th textAlign={"center"}>Points</Th>
            </Tr>
          </Thead>
          <Tbody>{rowNumber.map((i: number) => tableRow(i))}</Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Stats;
