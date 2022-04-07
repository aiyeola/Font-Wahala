import { Button, Circle } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const CheckButton = ({ onClick, type }) => {
  return (
    <Circle
      size="30px"
      bg={type === "no" ? "app.red" : "app.green"}
      w="30px"
      p="0"
      h="30px"
      rounded="10px"
      cursor="pointer"
      onClick={onClick}
    >
      {type === "no" ? (
        <AiOutlineClose color="white" />
      ) : (
        <AiOutlineCheck color="white" />
      )}
    </Circle>
  );
};

export default CheckButton;
