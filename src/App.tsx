import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import "~/lib/styles/index.css";

import Routings from "~/lib/router/Routings";
import { theme } from "~/lib/styles/theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routings />
    </Router>
  </ChakraProvider>
);

export default App;
