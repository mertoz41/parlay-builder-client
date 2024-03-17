import React from "react";
import { CloseButton as Button } from "@chakra-ui/react";

const CloseButton = ({ action }: { action: any }) => {
  return (
    <Button
      onClick={() => action(null)}
      size={"lg"}
      alignSelf={"center"}
      marginLeft={5}
      color={"white"}
      backgroundColor={"#4F5175"}
    />
  );
};

export default CloseButton;
