import React, { useContext } from "react";
import { CloseButton as Button } from "@chakra-ui/react";
import { Context } from "../context";
const CloseButton = ({ action }: { action: any }) => {
  const { setTeamName, playerData } = useContext(Context);
  const buttonAction = () => {
    action(null);
    if (!playerData) {
      setTeamName("");
    }
  };
  return (
    <Button
      onClick={() => buttonAction()}
      size={"lg"}
      alignSelf={"center"}
      marginLeft={5}
      color={"white"}
      backgroundColor={"#4F5175"}
    />
  );
};

export default CloseButton;
