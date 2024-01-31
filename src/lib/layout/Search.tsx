import { Box, Input, useColorModeValue } from "@chakra-ui/react";

const Search = () => {
  const border = useColorModeValue("1px solid #111", "1px solid #7d7d7d");
  const boxShadow = useColorModeValue("2px 4px 0 rgba(0,0,0,1)", "none");
  const background = useColorModeValue("white", "dark.500");

  return (
    <Box
      border={border}
      boxShadow={boxShadow}
      background={background}
      borderRadius="20px"
      width="300px"
    >
      <Input
        _focus={{ outline: "none", boxShadow: "none" }}
        border="none"
        background="transparent"
        width="100%"
        placeholder="Search..."
      />
    </Box>
  );
};

export default Search;
