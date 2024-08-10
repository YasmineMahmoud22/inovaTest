import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { Container, Grid, Stack } from "@mui/material";
import AppLayout from "@/components/layouts/AppLayout";

const Home: NextPageWithLayout = () => {
  return (
    <Stack>
      <Container>
        <Grid>
          <Grid>Home</Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
