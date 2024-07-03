import React, { useState, useContext } from "react";
import { Flex, Input, Button, Spinner } from "@chakra-ui/react";
import { Context } from "../context";
import { getPlayerStats } from "../utils";
const PlayerSearch = () => {
  const [fullName, setFullName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { setPlayerData, setLast5opp, setShowLast5 } = useContext(Context);
  const searchPlayer = async (e: any) => {
    e.preventDefault();
    if (fullName.length < 5) {
      return alert("Type first name and last name");
    }
    setLoading(true);
    let stats = await getPlayerStats(fullName);
    if (stats.error) {
      alert(stats.error);
    } else {
      setPlayerData({
        ...stats,
        fullName: fullName,
      });
      setLast5opp(null)
      setShowLast5(true)
    }

    setFullName("");
    setLoading(false);
  };
  return (
    <Flex flex={1} marginY={{ base: 5, lg: 0 }}>
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Player Full Name"
        color="white"
        fontSize={24}
        borderRadius={0}
        borderColor={"transparent"}
        borderBottomWidth={1}
        borderBottomColor="white"
      />
      <Flex w={200} justifyContent={"center"}>
        {loading ? (
          <Spinner alignSelf={"center"} color="white" size="lg" />
        ) : (
          <Button paddingX={5} onClick={(e) => searchPlayer(e)} marginLeft={5}>
            Get stats
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default PlayerSearch;
