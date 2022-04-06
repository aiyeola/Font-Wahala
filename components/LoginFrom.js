import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const LoginFrom = () => {
  return (
    <Box
      bg="white"
      rounded="30px"
      p="70px"
      w="full"
      maxW={[, , "400px", , , "447px"]}
      my="auto"
      mx="auto"
    >
      <Box mb="40px">
        <Text
          fontSize={[, , "20px", , , "24px"]}
          fontWeight="bold"
          color="#381C5F"
          mb="16px"
        >
          Log in to Trackhub
        </Text>

        <Text
          color="#9B8DAF"
          fontSize={[, , "16px", , , "18px"]}
          fontWeight="600"
          lineHeight={"short"}
        >
          To sign in, please type in the email address and password
        </Text>
      </Box>
      <form>
        <Stack mb="40px">
          <Text
            fontWeight={600}
            color="app.primary"
            fontSize={[, , "12px", , , "14px"]}
          >
            Email
          </Text>
          <Input
            type="email"
            variant="flushed"
            py="16px"
            placeholder="user@email.com"
            _focus={{ borderColor: "app.primary", borderBottomWidth: "1px" }}
          />
        </Stack>
        <Stack mb="40px">
          <Text
            fontWeight={600}
            color="app.primary"
            fontSize={[, , "12px", , , "14px"]}
          >
            Password
          </Text>
          <Input
            type="email"
            variant="flushed"
            py="16px"
            placeholder="*********"
            _focus={{ borderColor: "app.primary", borderBottomWidth: "1px" }}
          />
        </Stack>
        <Button>Login</Button>
      </form>
    </Box>
  );
};

export default LoginFrom;
