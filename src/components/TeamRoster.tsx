import React from "react";
import { GridItem, Heading, Flex, Box } from "@chakra-ui/react";
import Stats from "./Stats";
import CloseButton from "./CloseButton";
const TeamRoster = ({
  list,
  setLoading,
  setPlayerData,
  name,
  setSelectedTeam,
  setTeamName,
}: {
  list: any;
  setLoading: any;
  setPlayerData: any;
  name: string;
  setSelectedTeam: any;
  setTeamName: any;
}) => {
  return (
    <GridItem
      color={"white"}
      rowSpan={{ base: 10, lg: 12 }}
      colSpan={{ base: 8, lg: 8 }}
      overflow={"auto"}
      w={{ base: "100%", lg: "80%" }}
      m="0 auto"
    >
      <Flex justifyContent="space-around">
        <Box flex={1}></Box>
        <Heading>{name}</Heading>
        <Box flex={1} justifyContent={"flex-end"}>
          <CloseButton
            action={setSelectedTeam}
            setTeamName={setTeamName}
            playerData={null}
          />
        </Box>
      </Flex>
      <Stats
        list={list}
        rowNumber={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        setLoading={setLoading}
        setPlayerData={setPlayerData}
      />
    </GridItem>
  );
};

export default TeamRoster;
