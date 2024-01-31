import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

import Logo from "../../assets/logo.png";
import BookmarkSwitch from "~/lib/layout/BookmarkSwitch";
import NoteSwitch from "~/lib/layout/NotesSwitch";

import ThemeToggle from "./ThemeToggle";

const SmallHeader = () => {
  const logoTextColor = useColorModeValue("gray.900", "gray.50");
  const textShadow = useColorModeValue("4px 4px #d7d7d7", "4px 4px #4a4a4a");
  const BgColor = useColorModeValue("white", "dark.500");

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
      marginBottom="1rem"
      marginTop="1rem"
      position="fixed"
      top="-16px"
      zIndex="10"
      background={BgColor}
      px="2rem"
      py="0.5rem"
      transition="all 0.2s ease-in-out"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 5px 10px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginRight="auto"
        gap="1rem"
      >
        <Image width="50px" height="50px" src={Logo} />
        <Text
          fontFamily="'Lilita One', cursive"
          color={logoTextColor}
          fontSize="3xl"
          textShadow={textShadow}
        >
          Kitab Sulaym Ibn Qays Al Hilali
        </Text>
      </Box>
      <Box display="flex" gap="1rem" marginLeft="auto">
        <NoteSwitch />
        <BookmarkSwitch />
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default SmallHeader;
