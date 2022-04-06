import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trackhub Super Admin</title>
        <meta
          name="description"
          content="Super admin panel for Trackhun logistics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box minH="100vh" bg="app.bg" color="">
          <Heading fontSize={"30px"} fontWeight={600}>
            Dispatch Orders
          </Heading>
          <Text
            fontFamily={"Montserrat"}
            fontSize={"30px"}
            fontWeight={600}
            color="app.primary"
          >
            Finesse Pharmacy
          </Text>

          <Button variant="red" size="xs">
            Hello
          </Button>
        </Box>
      </main>
    </div>
  );
}
