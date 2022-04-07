import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import StatsCard from "./StatsCard";
import StatsCard2 from "./StatsCard2";
import TotalIncome from "./TotalIncome";

const StatsSection = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap="4" alignItems="center">
        <GridItem colSpan={2} h="">
          <TotalIncome />
        </GridItem>
        <GridItem h="">
          <StatsCard title={"Total Customers"} amount="999k" />
        </GridItem>
        <GridItem h="">
          <StatsCard title={"Total Phlebotomists"} amount="999k" />
        </GridItem>
        <GridItem h="">
          <StatsCard title={"Total Medical Firms"} amount="999k" />
        </GridItem>
      </Grid>
      <Grid
        mt="34px"
        templateColumns="repeat(5, 1fr)"
        gap="4"
        alignItems="center"
      >
        <GridItem>
          <StatsCard2 title="Total Statffs" amount="999k" />
        </GridItem>
        <GridItem h="">
          <StatsCard2 title="Total Orders" amount="999k" />
        </GridItem>
        <GridItem h="">
          <StatsCard2 title="Total Customers" amount="999k" />
        </GridItem>
        <GridItem h="">
          <StatsCard2 title="Total Phlebotomists" amount="999k" />
        </GridItem>
        <GridItem h="">
          <StatsCard2 title="Total Medical Firms" amount="999k" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default StatsSection;
