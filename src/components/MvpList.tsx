import React, { useEffect, useState } from "react";
import { Flex, Heading, Spinner, Box } from "@chakra-ui/react";
import { API_ROOT, getMvpList } from "../utils";
import Stats from "./Stats";
import axios from "axios";

const MvpList = ({
  setPlayerData,
  setLoading,
}: {
  setPlayerData: any;
  setLoading: any;
}) => {
  const [list, setList] = useState<any>(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${API_ROOT}get_mvp_list`, {
        headers: { "Content-type": "application/json" },
      })
      .then((resp: any) => {
        setList(resp.data.mvp_list);
      });
    // const data = await getMvpList()
    // console.log(data)
  };
  return (
    <Flex>
      {!list ? (
        <Flex w={"100%"} justify={"center"} marginTop={10}>
          <Spinner alignSelf={"center"} color="white" size="xl" />
        </Flex>
      ) : (
        <Stats
          list={list}
          rowNumber={[0, 1, 2, 3, 4]}
          setLoading={setLoading}
          setPlayerData={setPlayerData}
        />
      )}
    </Flex>
  );
};

export default MvpList;
