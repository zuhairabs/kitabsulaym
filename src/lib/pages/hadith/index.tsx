import { Box } from "@chakra-ui/react";
import { parseInt } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getBookContent, getTitle } from "~/lib/constants";
import SmallHeader from "~/lib/layout/SmallHeader";
import BackButton from "~/lib/pages/hadith/components/BackButton";
import ButtonsOptions from "~/lib/pages/hadith/components/ButtonsOptions";
import HadithContent from "~/lib/pages/hadith/components/HadithContent";
import Header from "~/lib/pages/hadith/components/Header";
import NavButton from "~/lib/pages/hadith/components/NavButton";

const Hadith = () => {
  const { id }: any = useParams();
  const title = getTitle(parseInt(id));
  const page = getBookContent(parseInt(id));
  const navigate = useNavigate();

  const [showNavButtons, setShowNavButtons] = useState<boolean>(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const body = document.querySelector("body");
      if (body && !e.target.classList.contains("nav-buttons")) {
        setShowNavButtons((prev) => !prev);
      }
    };

    // Attach the click event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the click event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <SmallHeader />
      <Box position="relative" width="100%" height="100vh" background="#f7f7f7">
        <Header>
          <>
            <BackButton title="Back" />
            <ButtonsOptions />
          </>
        </Header>
        <Box
          marginTop="5.5rem"
          paddingBottom="3rem"
          transform="translateY(90px)"
        >
          <HadithContent
            content={page.content}
            subtitle={`Page ${title.id <= 10 ? "0" : ""}${title.id}`}
          />
        </Box>
        <Box
          position="fixed"
          bottom="2rem"
          width="100%"
          background="transparent"
          display="flex"
          justifyContent="space-around"
          transition="all 0.3s ease-in-out"
          opacity={showNavButtons ? 1 : 0}
        >
          <NavButton
            disabled={page.page_no === 1}
            isBackArrow
            title="Prev"
            handleClick={() => navigate(`/hadith/${page.page_no - 1}`)}
          />
          <NavButton
            disabled={page.page_no === 530}
            isNextArrow
            title="Next"
            handleClick={() => navigate(`/hadith/${page.page_no + 1}`)}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hadith;
