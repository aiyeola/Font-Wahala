import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const LoginLeftGrid = () => {
  return (
    <Box h="100vh" pos="relative" d="flex" py="40px">
      <Box
        mr="-200px"
        w="426px"
        bg="#FFBB3A40"
        rounded="48px"
        zIndex={"docked"}
        mt="auto"
        mb={[, , , "20px", , "90px"]}
        p={[, , , "32px", , "40px"]}
        //   style={{
        //     backdropBlur: "blur(90px)",
        //     "-webkit-backdrop-filter": "blur(90px)",
        //   }}
      >
        <Text
          color="app.primary"
          fontWeight={"bold"}
          fontSize={[, , , "24px", , "32px"]}
          mb={[, , , "16px", , "24px"]}
          fonts
        >
          Lorem ipsum dolor sit amet, conse adipiscing elit.
        </Text>

        <Text color="text.black" fontSize={[, , , "16px", , "18px"]}>
          Lorem ipsum dolor sit amet, conse adipiscing elit.
        </Text>
      </Box>
      <Box
        h="full"
        d="flex"
        alignItems="center"
        justifyContent="end"
        //   pos="absolute"
        //   right="0"
      >
        <Image src="/img/login.png" h="full" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default LoginLeftGrid;
