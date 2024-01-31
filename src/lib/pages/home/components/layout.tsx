import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      {/* <Meta /> */}
      {children}
    </Box>
  );
};

export default Layout;
