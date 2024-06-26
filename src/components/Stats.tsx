import React, { useContext, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Heading,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";
import { Context } from "../context";
import { getPlayerStats } from "../utils";
const Stats = ({
  list,
  title,
  rowNumber,
}: {
  list: any;
  title: string;
  rowNumber: any;
}) => {
  const { setPlayerData, setLoading, playerData } = useContext(Context);
  const getStats = async (name: string) => {
    setLoading(true);
    let playerName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let stats = await getPlayerStats(playerName.toLowerCase());
    if (stats.error) {
      alert(stats.error);
    } else {
      setPlayerData({
        ...stats,
        fullName: name,
      });
    }
    setLoading(false);
  };
  const tableRow = (i: number) => {
    return (
      <Tr key={i}>
        {list.Rank ? <Td textAlign={"center"}>{list.Rank[i]}</Td> : null}
        {list.Player ? (
          <Td
            textAlign={"center"}
            onClick={() => getStats(list.Player[i])}
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            {list.Player[i]} {list.Team ? list.Team[i] : null}
          </Td>
        ) : null}
        {list.W ? <Td textAlign={"center"}>{list.W[i]}</Td> : null}
        {list.L ? <Td textAlign={"center"}>{list.L[i]}</Td> : null}

        {list.Date ? <Td textAlign={"center"}>{list.Date[i]}</Td> : null}
        {list.Opp ? <Td textAlign={"center"}>{list.Opp[i]}</Td> : null}
        {list.Result ? <Td textAlign={"center"}>{list.Result[i]}</Td> : null}

        {list.MP ? <Td textAlign={"center"}>{list.MP[i]}</Td> : null}
        <Td textAlign={"center"}>
          {list.FG[i]}/{list.FGA[i]}
        </Td>
        <Td textAlign={"center"}>
          {list["3P"][i]}/{list["3PA"][i]}
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
    <Box padding={3}>
      {/* {title.length ? (
        <Heading flex={1} textAlign={"center"} fontSize={20} color="white">
          {title}
        </Heading>
      ) : null} */}

      <Box overflowX={"auto"}>
        <Table size={"sm"} variant="simple" color="white">
          <Thead>
            <Tr>
              {list.Rank ? <Th textAlign={"center"}>Rank</Th> : null}
              {list.Player ? <Th textAlign={"center"}>Player</Th> : null}
              {list.W ? <Th textAlign={"center"}>W</Th> : null}
              {list.L ? <Th textAlign={"center"}>L</Th> : null}

              {list.Date ? <Th textAlign={"center"}>Date</Th> : null}
              {list.Opp ? <Th textAlign={"center"}>Opponent</Th> : null}
              {list.Result ? <Th textAlign={"center"}>Result</Th> : null}
              {list.MP ? <Th textAlign={"center"}>MP</Th> : null}
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
