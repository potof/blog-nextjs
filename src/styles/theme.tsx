import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        // color: "#5a5a5a",
        // fontWeight: "500",
      },
    },
  },
});
export default theme;
