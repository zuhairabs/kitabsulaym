import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

export const theme = extendTheme({
  colors: {
    dark: {
      900: "#1d1d1d",
      500: "#2b2b2b",
    },
  },
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config,
});
