import React, { useContext, useState } from "react";
import {
  Image,
  Table,
  Thead,
  Tbody,
  Heading,
  Flex,
  Tr,
  Th,
  Skeleton,
  Td,
} from "@chakra-ui/react";
import { Context } from "../context";
import CloseButton from "./CloseButton";
const PlayerCard = () => {
  const { playerData, setPlayerData, setLast5opp } = useContext(Context);
  const { seasonStats, img } = playerData;
  const [picLoaded, setPicLoaded] = useState<boolean>(false);
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
  const renderPlayerName = () => {
    return (
      <Flex justifyContent={"center"}>
        <Heading color={"white"} textAlign={"center"}>
          {playerData ? playerData.fullName : null}
        </Heading>
        <CloseButton action={clearPlayerData} />
      </Flex>
    );
  };
  return (
    <Flex
      flexDirection={"column"}
      flex={1}
      marginBottom={{ base: 5, lg: 0 }}
      borderRightWidth={{ base: 0, lg: 1 }}
    >
      {renderPlayerName()}
      <Flex>
        <Skeleton
          h={{ base: "auto", lg: "100%" }}
          w={{ base: 100, lg: "auto" }}
          isLoaded={picLoaded}
        >
          <Image
            alt="player pic"
            src={img}
            h={{ base: "auto", lg: "100%" }}
            w={{ base: 100, lg: "auto" }}
            onLoad={() => setPicLoaded(true)}
          />
        </Skeleton>
        <Flex
          marginTop={{ base: 5, lg: 0 }}
          flex={1}
          justifyContent={"flex-end"}
          direction={"column"}
        >
          {renderTable()}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlayerCard;
