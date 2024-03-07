import React from "react";
import { Flex } from "@chakra-ui/react";
import PlayerContainer from "./components/PlayerContainer";
function App() {
  return (
    <Flex bg="#303147" h={"100vh"} w={"100vw"} flexDir={"column"}>
      <PlayerContainer />
    </Flex>
  );
}

export default App;
