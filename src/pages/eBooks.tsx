import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AppLayout from "@/components/layouts/AppLayout";

const EBooks: NextPageWithLayout = () => {
  return (
    <Stack>
      <Container>
        <Typography
          {...{ children: "E-books", fontFamily: "BarlowBold", fontSize: 20 }}
        />
        <Grid container>
          <Grid item md={2} mt={3}>
            <Box
              {...{
                sx: {
                  width: 40,
                  height: 40,
                },
              }}
            >
                
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

EBooks.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default EBooks;
