import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const LastFive = ({ list }: { list: any }) => {
  const tableRow = (i: number) => {
    return (
      <Tr key={i}>
        <Td>{list.Date[i]}</Td>
        <Td>{list.Opp[i]}</Td>
        {list.Result ? <Td>{list.Result[i]}</Td> : null}

        <Td>{list.MP[i]}</Td>
        <Td>
          {list.FG[i]}/{list.FGA[i]}
        </Td>
        <Td>
          {list["3P"][i]}/{list["3PA"][i]}
        </Td>
        <Td>{list.REB[i]}</Td>
        <Td>{list.STL[i]}</Td>
        <Td>{list.BLK[i]}</Td>
        <Td>{list.AST[i]}</Td>
        <Td>{list.PTS[i]}</Td>
      </Tr>
    );
  };
  return (
    <Table variant="simple" color="white">
      <TableCaption>Last 5 Games</TableCaption>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Opponent</Th>
          {list.Result ? <Th>Result</Th> : null}
          <Th>Minutes Played</Th>
          <Th>FG/FGA</Th>
          <Th>3P/3PA</Th>
          <Th>Rebound</Th>
          <Th>Steal</Th>
          <Th>Block</Th>
          <Th>Assist</Th>
          <Th>Point</Th>
        </Tr>
      </Thead>
      <Tbody>{[0, 1, 2, 3, 4].map((i) => tableRow(i))}</Tbody>
    </Table>
  );
};

export default LastFive;
