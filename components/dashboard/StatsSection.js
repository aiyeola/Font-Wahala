import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import StatsCard from "./StatsCard";
import StatsCard2 from "./StatsCard2";
import TotalIncome from "./TotalIncome";

const StatsSection = () => {
  return (
    <>
      <Grid
        h="40%"
        templateColumns="repeat(5, 1fr)"
        gap="4"
        sx={{
          gridAutoRows: "1fr",
        }}
        alignItems="center"
      >
        <GridItem colSpan={2} h="full">
          <TotalIncome />
        </GridItem>
        <GridItem h="full">
          <StatsCard title={"Total Customers"} amount="999k" />
        </GridItem>
        <GridItem h="full">
          <StatsCard title={"Total Phlebotomists"} amount="999k" />
        </GridItem>
        <GridItem h="full">
          <StatsCard title={"Total Medical Firms"} amount="999k" />
        </GridItem>
      </Grid>
      <Grid
        h="60%"
        mt="34px"
        templateColumns="repeat(5, 1fr)"
        gap="4"
        alignItems="center"
      >
        <GridItem h="full">
          <StatsCard2 title="Total Statffs" amount="999k" />
        </GridItem>
        <GridItem h="full">
          <StatsCard2 title="Total Orders" amount="999k" />
        </GridItem>
        <GridItem h="full">
          <StatsCard2 title="Total Customers" amount="999k" />
        </GridItem>
        <GridItem h="full">
          <StatsCard2 title="Total Phlebotomists" amount="999k" />
        </GridItem>
        <GridItem h="full">
          <StatsCard2 title="Total Medical Firms" amount="999k" />
        </GridItem>
      </Grid>
    </>
  );
};

export default StatsSection;
