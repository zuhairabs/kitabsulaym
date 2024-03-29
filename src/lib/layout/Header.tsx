import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

import Logo from "../../assets/logo.png";
import BookmarkSwitch from "~/lib/layout/BookmarkSwitch";
import NoteSwitch from "~/lib/layout/NotesSwitch";

import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const logoTextColor = useColorModeValue("gray.900", "gray.50");
  const textShadow = useColorModeValue("4px 4px #d7d7d7", "4px 4px #4a4a4a");

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
        <Search />
        <NoteSwitch />
        <BookmarkSwitch />
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
