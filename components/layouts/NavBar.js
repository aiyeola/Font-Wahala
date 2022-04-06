import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { bottomNav, nav } from "utils";

const NavBar = () => {
  const active = "Dashboard";

  return (
    <Box
      h="full"
      bg="app.bg"
      w="full"
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
    >
      <Box position="relative" h="80vh">
        <Box bg="white" py="35px" h="full" rounded="20px" w="full">
          <Flex flexDir="column" h="full" justifyContent="space-between">
            <Box>
              {nav.map((nav) => (
                <Flex
                  key={nav}
                  bg={active === nav.name ? "app.primary" : null}
                  color={active === nav.name ? "white" : "#81007e50"}
                  _hover={{ bg: "app.primary", color: "white" }}
                  py={"12px"}
                  px="30px"
                  alignItems={"center"}
                  gap="32px"
                >
                  {nav.icon}
                  <Text
                    fontSize={[, , , "18px", , , , , "20px"]}
                    fontWeight="500"
                  >
                    {nav.name}
                  </Text>
                </Flex>
              ))}
            </Box>

            <Box mt="80px">
              {bottomNav.map((nav) => (
                <Flex
                  key={nav}
                  bg={active === nav.name ? "app.primary" : null}
                  color={active === nav.name ? "white" : "#81007e50"}
                  _hover={{ bg: "app.primary", color: "white" }}
                  py={"12px"}
                  px="30px"
                  alignItems={"center"}
                  gap="32px"
                >
                  {nav.icon}
                  <Text
                    fontSize={[, , , "18px", , , , , "20px"]}
                    fontWeight="500"
                  >
                    {nav.name}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
