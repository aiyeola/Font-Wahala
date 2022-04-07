import { Box, Grid, GridItem } from "@chakra-ui/react";
import { MapSection } from "components";
import { DispatchOrdersGrid, StatsSection } from "components/dashboard";
import OrderConfirmationsGrid from "components/dashboard/orderConfirmationsGrid";
import Head from "next/head";

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
        <Box>
          <Grid
            mb="32px"
            templateColumns="repeat(7, 1fr)"
            gap={["5", , , , , "6"]}
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
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={["5", , , , , "6"]}
            alignItems="center"
            // gridAutoRows="1fr"
            sx={{
              gridAutoRows: "1fr",
            }}
          >
            <GridItem colSpan={5} h="full">
              <MapSection />
            </GridItem>
            <GridItem h="full" colSpan={2}>
              <OrderConfirmationsGrid />
            </GridItem>
          </Grid>
        </Box>
      </main>
    </div>
  );
}

Home.requireAuth = true;
