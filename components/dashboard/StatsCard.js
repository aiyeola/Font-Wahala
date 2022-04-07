import { Box, Text } from "@chakra-ui/react";
import React from "react";

const StatsCard = ({ title, amount }) => {
  return (
    <Box px="20px" py="30px" bg="white" rounded="38px" h="full">
      <Box h="40px" rounded="10px" bg="app.primary" mb="16px" w="40px"></Box>
      <Text color="#373737" pb="5px">
        {title}
      </Text>
      <Text
        color="#373737"
        fontSize={["28px", , , , , "34px"]}
        fontWeight="600"
      >
        {amount}
      </Text>
    </Box>
  );
};

export default StatsCard;
