import {
  Box,
  Grid,
  GridItem,
  Input,
  Circle,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { RiSearchFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const Topbar = () => {
  return (
    <Box
      pt="40px"
      pb="32px"
      w="full"
      bg="app.bg"
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
    >
      <Grid
        templateColumns="repeat(9, 1fr)"
        gap={5}
        h="full"
        alignItems="center"
      >
        <GridItem colSpan={2} bg="">
          <Text>Logo</Text>
        </GridItem>
        <GridItem colSpan={4} bg="">
          <Stack pos="relative" h={[, , "50px", , , "60px"]}>
            <Flex
              h="full"
              top={0}
              left={0}
              pos={"absolute"}
              alignItems="center"
              zIndex={1}
              px="20px"
              pt={2}
            >
              <RiSearchFill size="20px" />
            </Flex>
            <Input
              h="full"
              // h={[, , "50px", , , "60px"]}
              w="70%"
              pl="50px"
              borderWidth={0}
              placeholder="Search"
              rounded="15px"
              bg="white"
              _focus={{
                outline: "none",
                ringColor: "app.primary",
                borderColor: "#81007E79",

                borderWidth: "2px",
              }}
            />
          </Stack>
        </GridItem>
        <GridItem colSpan={3} bg="">
          <Circle bg="white" size="60px" pos="relative">
            <Circle
              bg="app.notify"
              size="12px"
              pos="absolute"
              top="0"
              right="1"
            ></Circle>
            <IoNotifications size="20px" />
          </Circle>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Topbar;
