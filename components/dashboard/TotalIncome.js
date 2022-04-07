import { Box, Circle, Text } from "@chakra-ui/react";
import React from "react";

const TotalIncome = () => {
  return (
    <Box bg="app.primary" rounded="40px" p="30px" h="full">
      <Circle size={"50px"} bg="white" mb="14px"></Circle>
      <Text color="#ffffffcc" pb="5px">
        Total Income
      </Text>
      <Text color="white" fontSize={["28px", , , , , "34px"]} fontWeight="600">
        N999,999,999
      </Text>
    </Box>
  );
};

export default TotalIncome;
