import { Box } from "@chakra-ui/react";
import React from "react";

const MapSection = () => {
  return (
    <Box h="full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.8408132807!2d7.379827471333515!3d9.0242493682335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1649306049918!5m2!1sen!2sng"
        style={{
          borderRadius: "38px",
          width: "100%",
          height: "100%",
        }}
        // style="border:0;"
        // allowfullscreen=""
        // loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapSection;
