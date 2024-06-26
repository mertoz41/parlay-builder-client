import React, { useContext } from "react";
import {
  Image,
  Table,
  Thead,
  Tbody,
  Heading,
  Flex,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { Context } from "../context";
import CloseButton from "./CloseButton";
const PlayerCard = () => {
  const { playerData, setPlayerData, setLast5opp } = useContext(Context);
  const { seasonStats, img } = playerData;
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
  const renderTable = () => (
    <Table alignSelf={"flex-end"} color="white" size={"sm"}>
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
  );

  const clearPlayerData = () => {
    setPlayerData(null);
    setLast5opp(null);
  };
  return (
    <Flex flex={1} justifyContent={"space-between"} flexDirection={"column"}>
      <Flex justifyContent={"center"}>
        <Heading color={"white"} textAlign={"center"}>
          {playerData ? playerData.fullName : null}
        </Heading>
        <CloseButton action={clearPlayerData} />
      </Flex>
      <Flex>
        <Image alt="player pic" src={img} h={48} m="0 auto" />
        <Flex
          margin={2}
          justifyContent={"space-between"}
          direction={"column"}
        ></Flex>
        {renderTable()}
      </Flex>
    </Flex>
  );
};

export default PlayerCard;
