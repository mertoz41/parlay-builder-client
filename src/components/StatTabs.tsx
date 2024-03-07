import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Stats from "./Stats";
const StatTabs = ({ last5, lastOpp }: { last5: any; lastOpp: any }) => {
  console.log(lastOpp)
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Last 5 games</Tab>
        <Tab>Last 5 games against Wizards</Tab>
      </TabList>

      <TabPanels>
        <Stats list={last5} />
      </TabPanels>

      {/* <TabPanel>
        <Stats list={lastOpp} />
      </TabPanel> */}
    </Tabs>
  );
};

export default StatTabs;
