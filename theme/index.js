import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import styles from "./styles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "fortedges",
};

const overrides = {
  config,
  styles,
  ...foundations,
};

const theme = extendTheme(overrides);

export default theme;
