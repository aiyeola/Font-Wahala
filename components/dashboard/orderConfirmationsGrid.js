import { Box, Button, Text } from "@chakra-ui/react";
import { gridDispatchOrders } from "data";
import React from "react";
import GrudConfirmation from "./GrudConfirmation";

const OrderConfirmationsGrid = () => {
  return (
    <Box bg="white" pt="30px" pb="18px" rounded="38px" h="full">
      {/* <Text
        color="app.primary"
        fontSize={"20px"}
        fontWeight="600"
        px="24px"
        mb="16px"
      >
        Dispatch Orders
      </Text> */}
      {gridDispatchOrders.slice(0, 2).map((order, i) => (
        <GrudConfirmation key={i} order={order} />
      ))}

      {/* <Button color="app.primary" size="sm" w="full" variant="link">
        View more...
      </Button> */}
    </Box>
  );
};

export default OrderConfirmationsGrid;
