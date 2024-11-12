import React from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
const Loading = ({ website }: { website: string }) => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignSelf={"center"}
      marginTop={5}
    >
      <Heading color="white" fontSize={22} alignSelf={"center"}>
        scraping {website}
      </Heading>
      <Spinner size="xl" color="#4F5175" alignSelf={"center"} />
    </Flex>
  );
};

export default Loading;
