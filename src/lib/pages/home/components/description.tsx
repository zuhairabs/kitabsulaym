import { GridItem, Text, useColorModeValue } from "@chakra-ui/react";

import { DESCRIPTION } from "~/lib/constants";

const Description = () => {
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
    <GridItem
      borderTop={borderThin}
      borderLeft={borderThin}
      borderBottom={borderThick}
      borderRight={borderThick}
      borderRadius={10}
      background={bgColor}
      height="250px"
      overflowY="scroll"
      padding="1rem"
      className="styled-scrollbar"
    >
      {DESCRIPTION.text.split("\n").map((item, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <Text fontSize="sm" as="p" key={key}>
          {item}
          <br />
        </Text>
      ))}
    </GridItem>
  );
};

export default Description;
