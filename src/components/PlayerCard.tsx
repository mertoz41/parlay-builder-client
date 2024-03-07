import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const PlayerCard = ({
  pic,
  seasonStats,
  playerName,
}: {
  pic: string;
  seasonStats: any;
  playerName: string;
}) => {
  const renderSeasonStats = (stat: any, title: string) => {
    return (
      <Box marginBottom={2}>
        <Heading textAlign={"center"} fontSize={17}>
          {title}
        </Heading>
        <Table color="white" size="sm">
          <Thead>
            <Tr>
              <Th>PTS</Th>
              <Th>TRB</Th>
              <Th>AST</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{stat.pts}</Td>
              <Td>{stat.reb}</Td>
              <Td>{stat.assist}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    );
  };

  const capitalizePlayerName = (name: string) => {
    let splitted = name.split(" ");
    let fullName: any = [];

    splitted.forEach((name) => {
      let remainingLetters = name.slice(1);
      fullName.push(name.charAt(0).toUpperCase() + remainingLetters);
    });
    return fullName.join(" ");
  };
  return (
    <Box justifyContent={"center"} display={"flex"} flexDir={"column"}>
      <Heading color={"white"} textAlign={"center"}>
        {capitalizePlayerName(playerName)}
      </Heading>
      <Image alt="player pic" src={pic} w={90} m="0 auto" />
      {renderSeasonStats(seasonStats.regularSeason, "season")}
      {renderSeasonStats(seasonStats.last5, "last 5 games")}
      {renderSeasonStats(seasonStats.last5Opp, "last 5 games against")}
    </Box>
  );
};

export default PlayerCard;
