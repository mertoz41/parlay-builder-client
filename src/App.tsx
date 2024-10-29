import React from "react";
import { Flex } from "@chakra-ui/react";
import HomeContainer from "./components/HomeContainer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Flex bg="#303147" overflow={"auto"}>
      <Helmet>
        <title>NBA Stats Scraper</title>
        <meta
          name="description"
          content="Stats scraper collects necessary statistics for you to build your parlay."
        />
      </Helmet>
      <HomeContainer />
    </Flex>
  );
}

export default App;
