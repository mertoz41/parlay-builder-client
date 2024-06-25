import React from "react";
import { Flex } from "@chakra-ui/react";
import HomeContainer from "./components/HomeContainer";
function App() {
  return (
    <Flex bg="#303147" overflow={"auto"}>
      <HomeContainer />
    </Flex>
  );
}

export default App;
