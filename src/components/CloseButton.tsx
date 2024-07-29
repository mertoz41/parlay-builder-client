import React from "react";
import { CloseButton as Button } from "@chakra-ui/react";
const CloseButton = ({
  action,
  setTeamName,
  playerData,
}: {
  action: any;
  setTeamName: any;
  playerData: any;
}) => {
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
