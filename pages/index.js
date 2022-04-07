import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { DispatchOrdersGrid, StatsSection } from "components/dashboard";
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
        <Box minH="100vh">
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap="6"
            alignItems="center"
            // gridAutoRows="1fr"
            sx={{
              gridAutoRows: "1fr",
            }}
          >
            <GridItem colSpan={5}>
              <StatsSection />
            </GridItem>
            <GridItem h="full" colSpan={2}>
              <DispatchOrdersGrid />
            </GridItem>
          </Grid>
        </Box>
      </main>
    </div>
  );
}

Home.requireAuth = true;
