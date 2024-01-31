import { GridItem, Image } from "@chakra-ui/react";

import CoverImage from "../../../../assets/sulaym-cover.jpg";

const Cover = () => {
  return (
    <GridItem display="flex" justifyContent="center" alignItems="center">
      <Image
        boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.25)"
        borderRadius="10px"
        width="200px"
        height="250px"
        src={CoverImage}
        className="animate-cover"
      />
    </GridItem>
  );
};

export default Cover;
