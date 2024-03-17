import React from "react";
import { Flex } from "@chakra-ui/react";
import GridContainer from "./components/GridContainer";
function App() {
  return (
    <Flex bg="#303147" overflow={"auto"}>
      <GridContainer />
    </Flex>
  );
}

export default App;
