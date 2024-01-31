import { Box, useColorModeValue } from "@chakra-ui/react";

import { BOOK_TOC } from "~/lib/constants";
import ChapterCard from "~/lib/pages/home/components/chapters/card";

const ChaptersList = () => {
  const borderThin = useColorModeValue(
    "1px solid #2b2b2b",
    "1px solid #7d7d7d"
  );
  const borderThick = useColorModeValue(
    "3px solid #2b2b2b",
    "1px solid #7d7d7d"
  );
  const bgColor = useColorModeValue("white", "dark.900");

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      borderTop={borderThin}
      borderLeft={borderThin}
      borderBottom={borderThick}
      borderRight={borderThick}
      borderRadius={10}
      marginX="1rem"
      marginTop="1.5rem"
      height="170px"
      width="calc(100% - 30px)"
      overflowX="scroll"
      background={bgColor}
      className="styled-scrollbar"
    >
      {BOOK_TOC.map((chapter) => (
        <ChapterCard chapter={chapter} />
      ))}
    </Box>
  );
};

export default ChaptersList;
