import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const bodyColor = useColorModeValue("yellow.100", "dark.900");
  const mainCardColor = useColorModeValue("red.100", "dark.500");
  const border = useColorModeValue("1px solid #111", "1px solid #7d7d7d");
  const boxShadow = useColorModeValue("7px 8px 0 rgba(0,0,0,1)", "none");

  return (
    <Box
      background={bodyColor}
      height="calc(100vh - 2px)"
      margin="-15px auto 0 auto"
      transition="background 0.2s ease-out"
    >
      <Meta />
      <Flex wrap="wrap" margin="1rem 2rem">
        <Header />
        <Box
          background={mainCardColor}
          width="full"
          height="calc(100vh - 150px)"
          border={border}
          boxShadow={boxShadow}
          borderRadius={10}
          as="main"
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
