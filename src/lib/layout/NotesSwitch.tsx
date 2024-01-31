import { Box, Tooltip, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MdLibraryBooks } from "react-icons/md";

type IconWrapperProps = {
  children: ReactNode;
  onClick: () => void;
};

const IconWrapper = ({ children, onClick }: IconWrapperProps) => {
  const bgColor = useColorModeValue("gray.50", "dark.500");
  const shadow = useColorModeValue(
    "0px 5px 20px 0px rgba(0, 0, 0, 0.1)",
    "0px 5px 20px 0px rgba(0, 0, 0, 0.3)"
  );
  const border = useColorModeValue("1px solid #111", "1px solid #7d7d7d");
  const boxShadow = useColorModeValue("2px 4px 0 rgba(0,0,0,1)", "none");

  return (
    <Tooltip
      padding=".5rem"
      borderRadius="5px"
      label="Notes"
      hasArrow
      placement="left"
    >
      <Box
        as="span"
        cursor="pointer"
        onClick={onClick}
        width="40px"
        height="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        transition="all 0.2s ease-in-out"
        border={border}
        boxShadow={boxShadow}
        _hover={{
          background: bgColor,
          boxShadow: shadow,
        }}
      >
        {children}
      </Box>
    </Tooltip>
  );
};

const NoteSwitch = () => {
  const color = useColorModeValue("#2b2b2b", "#d9d9d9");

  return (
    <IconWrapper onClick={() => {}}>
      <MdLibraryBooks color={color} size={20} />
    </IconWrapper>
  );
};

export default NoteSwitch;
