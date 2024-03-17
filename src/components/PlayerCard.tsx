import React, { useContext } from "react";
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
import CloseButton from "./CloseButton";
import { Context } from "../context";
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
  const {setPlayerData} = useContext(Context)
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
    <Flex h="100%" flexDir={"column"}>
      <Heading color={"white"} textAlign={"center"}>
        {capitalizePlayerName(playerName)}
      </Heading>
      <Box position={"absolute"} left={0}>
        <CloseButton action={() => setPlayerData(null)} />
      </Box>
      <Image alt="player pic" src={pic} w={40} m="0 auto" />
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
    </Flex>
  );
};

export default PlayerCard;
