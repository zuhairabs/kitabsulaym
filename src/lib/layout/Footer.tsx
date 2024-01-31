import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
      marginTop="1.5rem"
    >
      <Text fontWeight="semibold" fontSize="md">
        &copy; &nbsp;
        <Link href="https://theburningdoor.com" isExternal>
          The Burning Door
        </Link>{" "}
        &nbsp; - &nbsp;{new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
