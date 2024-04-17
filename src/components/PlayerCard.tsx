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
const PlayerCard = () => {
  const { playerData, setPlayerData } = useContext(Context);
  const { seasonStats, img, fullName } = playerData;
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
        {capitalizePlayerName(fullName)}
      </Heading>
      <Box position={"absolute"} left={0}>
        <CloseButton action={() => setPlayerData(null)} />
      </Box>
      <Image alt="player pic" src={img} w={40} m="0 auto" />
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
          {/* {renderStats(`last 5 vs ${next_opponent[0]}`, seasonStats.last5Opp)} */}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default PlayerCard;
