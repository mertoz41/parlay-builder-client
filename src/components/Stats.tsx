import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";

const Stats = ({ list }: { list: any }) => {
  const tableRow = (i: number) => {
    return (
      <Tr key={i}>
        <Td textAlign={"center"}>{list.Date[i]}</Td>
        <Td textAlign={"center"}>{list.Opp[i]}</Td>
        {/* {list.Result ? <Td textAlign={"center"}>{list.Result[i]}</Td> : null} */}

        <Td textAlign={"center"}>{list.MP[i]}</Td>
        <Td textAlign={"center"}>
          {list.FG[i]}/{list.FGA[i]}
        </Td>
        <Td textAlign={"center"}>
          {list["3P"][i]}/{list["3PA"][i]}
        </Td>
        <Td textAlign={"center"}>{list.REB[i]}</Td>
        <Td textAlign={"center"}>{list.STL[i]}</Td>
        <Td textAlign={"center"}>{list.BLK[i]}</Td>
        <Td textAlign={"center"}>{list.AST[i]}</Td>
        <Td textAlign={"center"}>{list.PTS[i]}</Td>
      </Tr>
    );
  };

  return (
    <Box>
      <Table size={"sm"} variant="simple" color="white">
        <TableCaption>Last 5 Games</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign={"center"}>Date</Th>
            <Th textAlign={"center"}>Opponent</Th>
            {/* {list.Result ? <Th textAlign={"center"}>Result</Th> : null} */}
            <Th textAlign={"center"}>MP</Th>
            <Th textAlign={"center"}>FG/FGA</Th>
            <Th textAlign={"center"}>3P/3PA</Th>
            <Th textAlign={"center"}>Rebound</Th>
            <Th textAlign={"center"}>Steal</Th>
            <Th textAlign={"center"}>Block</Th>
            <Th textAlign={"center"}>Assists</Th>
            <Th textAlign={"center"}>Points</Th>
          </Tr>
        </Thead>
        <Tbody>{[0, 1, 2, 3, 4].map((i) => tableRow(i))}</Tbody>
      </Table>
    </Box>
  );
};

export default Stats;
