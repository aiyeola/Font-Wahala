import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Box
      bg="app.bg"
      px={[, , "30px", "40px", , "80px"]}
      position="absolute"
      top={0}
      w="full"
      pos="relative"
    >
      <Topbar />
      <Grid templateColumns="repeat(9, 1fr)" gap={5}>
        <GridItem colSpan={2}>
          <Box top="0" position="sticky">
            <NavBar />
          </Box>
        </GridItem>
        <GridItem position="relative" colSpan="7">
          <Box pos="sticky" top={0} w="full">
            {children}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
