import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { LoginFrom, LoginLeftGrid } from "components";
import Head from "next/head";

const Login = () => {
  return (
    <Box>
      <Head>
        <title>Sign In | Trackhub Super-Admin</title>
        <meta
          name="description"
          content="Super admin panel for Trackhub logistics"
        />
      </Head>
      <main>
        <Box bg="app.bg" px="92px">
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colSpan={1} d="flex" h="auto">
              <Text mt="60px">Logo</Text>
              <LoginFrom />
            </GridItem>
            <GridItem colSpan={1}>
              <LoginLeftGrid />
            </GridItem>
          </Grid>
        </Box>
      </main>
    </Box>
  );
};

export default Login;
