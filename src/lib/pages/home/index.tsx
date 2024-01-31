import { Grid } from "@chakra-ui/react";

import MainLayout from "~/lib/layout";
import ChaptersList from "~/lib/pages/home/components/chapters/list";
import Cover from "~/lib/pages/home/components/cover";
import Description from "~/lib/pages/home/components/description";
import Layout from "~/lib/pages/home/components/layout";

const Home = () => {
  return (
    <MainLayout>
      <Layout>
        <Grid
          paddingX="1rem"
          paddingTop="10px"
          templateColumns="30% 68%"
          gap={6}
        >
          <Cover />
          <Description />
        </Grid>
        <ChaptersList />
      </Layout>
    </MainLayout>
  );
};

export default Home;
