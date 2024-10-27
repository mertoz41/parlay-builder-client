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
      rowSpan={{ base: 5, lg: 12 }}
      colSpan={{ base: 8, lg: 8 }}
      overflow={"auto"}
      w={"80%"}
      m="0 auto"
    >
      <Flex justifyContent="space-around">
        <Box></Box>
        <Heading>{name}</Heading>
        <CloseButton
          action={setSelectedTeam}
          setTeamName={setTeamName}
          playerData={null}
        />
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
