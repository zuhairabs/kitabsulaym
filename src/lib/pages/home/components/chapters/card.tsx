import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { capitalize, truncate } from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HadithNumber = ({ index }: { index: number }) => {
  const bgColor = useColorModeValue("black", "dark.900");
  const border = useColorModeValue("none", "1px solid white");

  return (
    <Box
      background={bgColor}
      width="40px"
      height="40px"
      borderRadius="50%"
      position="absolute"
      top="-1.5rem"
      left="0"
      right="0"
      margin="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border={border}
    >
      <Text
        fontSize="38px"
        fontFamily="'Lilita One', cursive"
        textShadow={`rgb(0 0 0) 3px 0px 0px, rgb(0 0 0) 2.83487px 0.981584px 0px,
      rgb(0 0 0) 2.35766px 1.85511px 0px, rgb(0 0 0) 1.62091px 2.52441px 0px,
      rgb(0 0 0) 0.705713px 2.91581px 0px, rgb(0 0 0) -0.287171px 2.98622px 0px,
      rgb(0 0 0) -1.24844px 2.72789px 0px, rgb(0 0 0) -2.07227px 2.16926px 0px,
      rgb(0 0 0) -2.66798px 1.37182px 0px, rgb(0 0 0) -2.96998px 0.42336px 0px,
      rgb(0 0 0) -2.94502px -0.571704px 0px,
      rgb(0 0 0) -2.59586px -1.50383px 0px, rgb(0 0 0) -1.96093px -2.27041px 0px,
      rgb(0 0 0) -1.11013px -2.78704px 0px,
      rgb(0 0 0) -0.137119px -2.99686px 0px,
      rgb(0 0 0) 0.850987px -2.87677px 0px, rgb(0 0 0) 1.74541px -2.43999px 0px,
      rgb(0 0 0) 2.44769px -1.73459px 0px, rgb(0 0 0) 2.88051px -0.838247px 0px;`}
        color="white"
      >
        {index < 10 ? `0${index}` : index}
      </Text>
    </Box>
  );
};

type ChapterType = {
  chapter: {
    title: string;
    id: number;
  };
};

const ChapterCard = ({ chapter }: ChapterType) => {
  const navigate = useNavigate();

  const borderThin = useColorModeValue(
    "1px solid #868686",
    "1px solid #6f6f6f"
  );

  const borderHovered = useColorModeValue(
    "1px dashed #bd9f02",
    "1px dashed #d9d9d9"
  );
  const bgColor = useColorModeValue("yellow.100", "dark.500");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      border={borderThin}
      borderRadius={10}
      marginX="1rem"
      marginTop="1rem"
      background={bgColor}
      width="250px"
      height="100px"
      flex="0 0 auto"
      padding="1rem"
      position="relative"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{
        width: "270px",
        height: "120px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        border: borderHovered,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/hadith/${chapter.id}`)}
    >
      <HadithNumber index={chapter.id} />
      <Text
        marginTop="1rem"
        textAlign="center"
        fontWeight="semibold"
        fontSize="md"
      >
        {truncate(capitalize(chapter.title), { length: isHovered ? 80 : 40 })}
      </Text>
    </Box>
  );
};

export default ChapterCard;
