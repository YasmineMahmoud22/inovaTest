import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import FooterStyle from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgb(30, 30, 30);
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(30, 30, 30);
  }
`;

const Footer = () => {
  return (
    <Box className={FooterStyle.FooterContainer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={3} xs={12}>
            <Image
              {...{
                src: "http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg",
                width: 100,
                height: 100,
                alt: "logo",
              }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <Typography
                {...{
                  children: "Join our",
                  fontFamily: "BarlowRegular",
                  fontSize: 16,
                }}
              />
              <Typography
                {...{
                  children: "Newsetter",
                  fontFamily: "BarlowBold",
                  fontSize: 16,
                }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              {...{
                style: {
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "row",
                },
              }}
            >
              <CustomTextField
                {...{
                  placeholder: "What you are looking for?",
                  variant: "outlined",
                  style: {
                    width: "100%",
                  },
                  inputProps: {
                    style: {
                      textAlign: "left",
                      width: 210,
                      height: 28,
                      padding: 0,
                      borderWidth: 1,
                      borderColor: "rgb(30, 30, 30) !important",
                      color: "#ffffff",
                    },
                  },
                }}
              />
              <Box
                {...{
                  sx: {
                    width: 100,
                    height: 40,
                    backgroundColor: "rgb(85, 231, 72)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItem: "center",
                  },
                }}
              >
                <Typography
                  {...{
                    children: "Subscrible",
                    style: {
                      color: "",
                      textAlign: "center",
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <div
          {...{
            style: {
              width: "100%",
              height: 3,
              backgroundColor: "rgb(30,30,30)",
              marginTop: 10,
              marginBottom: 10,
            },
          }}
        />
        <Grid container className={FooterStyle.LinksBox}>
          <Grid mb={5} xs={5} md={4} item>
            <Box>
              <Typography
                fontSize={{ md: 14 }}
                fontFamily={"BarlowRegular"}
                color="white"
              >
                Lorem Ipsum is simply dummy text of the printing and <br/> typesett
                ing industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>

              <Typography
                fontSize={{ md: 16 }}
                style={{ marginTop: 10 }}
                color="white"
              >
                Follow Us on
              </Typography>
            </Box>
          </Grid>

          <Grid  mb={5} xs={12} md={4} item>
            <Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href={""}>
                        <Typography color="#fff">News</Typography>
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="">
                        {" "}
                        <Typography color="#fff">Tournaments</Typography>
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="#fff"
                    primary={<Typography color="#fff">Courses</Typography>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="#fff"
                    primary={
                      <Link href={""}>
                        <Typography color="#fff">E-Books</Typography>
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid mb={5} xs={12} md={4} item>
            <Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href={""}>
                        <Typography color="#fff">Privacy policies</Typography>
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="">
                        {" "}
                        <Typography color="#fff">Terms & Conditions</Typography>
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="#fff"
                    primary={<Typography color="#fff">Contact Us</Typography>}
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{ pt: 4, pb: 2 }}
        maxWidth="lg"
        style={{
          backgroundColor: "red",
        }}
      >
        <Typography color="#fff" fontSize={17}>
          2024 LOGO,All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
