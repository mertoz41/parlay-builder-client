import React from "react";
import {
  Box,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const PlayerCard = ({
  pic,
  seasonStats,
  playerName,
  nextOpponent,
}: {
  pic: string;
  seasonStats: any;
  playerName: string;
  nextOpponent: string;
}) => {
  const capitalizePlayerName = (name: string) => {
    let splitted = name.split(" ");
    let fullName: any = [];

    splitted.forEach((name) => {
      let remainingLetters = name.slice(1);
      fullName.push(name.charAt(0).toUpperCase() + remainingLetters);
    });
    return fullName.join(" ");
  };

  const renderStats = (title: string, stat: any) => {
    return (
      <Tr>
        <Th color="gray">{title}</Th>
        <Td textAlign={"center"}>{stat.pts}</Td>
        <Td textAlign={"center"}>{stat.assist}</Td>
        <Td textAlign={"center"}>{stat.reb}</Td>
      </Tr>
    );
  };
  return (
    <Box justifyContent={"center"} display={"flex"} flexDir={"column"}>
      <Flex flexDir={"column"}>
        <Heading color={"white"} textAlign={"center"}>
          {capitalizePlayerName(playerName)}
        </Heading>
        <Image alt="player pic" src={pic} w={40} m="0 auto" />
      </Flex>
      <Table color="white" size={"sm"}>
        <Thead>
          <Tr color="gray">
            <Th> </Th>
            <Th textAlign={"center"} color="gray">
              PTS
            </Th>
            <Th textAlign={"center"} color="gray">
              AST
            </Th>
            <Th textAlign={"center"} color="gray">
              REB
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {renderStats("season", seasonStats.regularSeason)}
          {renderStats("last 5", seasonStats.last5)}
          {renderStats(`last 5 vs ${nextOpponent}`, seasonStats.last5Opp)}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PlayerCard;
