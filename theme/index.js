import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import styles from "./styles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "trackhub",
};

const overrides = {
  config,
  styles,
  ...foundations,
};

const theme = extendTheme(overrides);

// const theme = extendTheme({
//   //   fonts: {
//   //     heading: "Montserrat, sans-serif",
//   //     body: "GT Walsheim Pro, sans-serif",
//   //   },
// });

export default theme;
