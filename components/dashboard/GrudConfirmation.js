import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import CheckButton from "./CheckButton";

const GridConfirmation = ({ order }) => {
  const { img, name, location, service } = order;
  return (
    <Box mb="16px" bg="#FFBB3A1a" px="20px" py="16px">
      <Flex mb="16px" alignItems="center" gap="8px">
        <Image w="40px" rounded="full" src={img} />
        <Box>
          <Text
            fontSize={[, , "18px", , , "20px"]}
            color="app.primary"
            fontWeight="600"
          >
            {name}
          </Text>
        </Box>
      </Flex>

      <Flex justify="space-between">
        <Box color="text.black">
          <Text fontSize={["11px", , , , , "13px"]}>{service}</Text>
          <Flex color="text.yellow" alignItems="center" gap="2">
            <MdLocationOn />
            <Text fontSize="11px">{location}</Text>
          </Flex>
        </Box>
        <Flex gap="2">
          <CheckButton />
          <CheckButton type={"no"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default GridConfirmation;
