import React, { useState } from "react";
import {
  Image,
  Table,
  Thead,
  Tbody,
  Box,
  Heading,
  Flex,
  Tr,
  Th,
  Skeleton,
  Td,
} from "@chakra-ui/react";
import CloseButton from "./CloseButton";
const PlayerCard = ({
  playerData,
  setPlayerData,
}: {
  playerData: any;
  setPlayerData: any;
}) => {
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

  return (
    <Flex
      flexDirection={"column"}
      flex={1}
      marginBottom={{ base: 5, lg: 0 }}
      borderRightWidth={{ base: 0, lg: 1 }}
    >
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
          justifyContent={"space-between"}
          direction={"column"}
        >
          <Flex alignSelf={"center"}>
            <Box />
            <Heading fontSize={22}>{playerData.fullName}</Heading>
            <CloseButton
              action={setPlayerData}
              setTeamName={() => {}}
              playerData={playerData}
            />
          </Flex>
          {renderTable()}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlayerCard;
