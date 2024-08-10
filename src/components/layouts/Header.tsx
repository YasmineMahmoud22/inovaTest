import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  AppBar,
  Container,
  Toolbar,
  Grid,
  Box,
  Menu,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function ResponsiveAppBar() {
  const pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "News",
      link: "/",
    },
    {
      name: "Courses",
      link: "/",
    },
    {
      name: "E-books",
      link: "/eBooks",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Grid
          container
          {...{ style: { display: "flex", alignItems: "center" } }}
        >
          <Grid {...{ md: 4 }} item>
            <Link
              {...{
                href: "/",
              }}
            >
              <Image
                {...{
                  src: "http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg",
                  width: 100,
                  height: 100,
                  alt: "logo",
                }}
              />
            </Link>
          </Grid>
          <Grid
            item
            {...{
              md: 8,
              style: {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "cente",
              },
            }}
          >
            <Typography
              {...{
                children: "Sign in or Sign Up",
                color: "#ffffff",
                style: {
                  textAlign: "center",
                },
                fontSize: 20,
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ fontSize: 30 }} htmlColor="#ffffff" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  href={page.link}
                >
                  <Typography
                    {...{
                      fontFamily: "BarlowRegular",
                      fontSize: 16,
                      color: "#ffffff",
                      children: page?.name,
                      textAlign: "center",
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
      <Toolbar>
        <Container
          {...{
            style: {
              width: "100%",
            },
          }}
        >
          <Grid container>
            <Grid
              item
              {...{
                md: 8,
                sx: {
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                },
              }}
            >
              <Box
                {...{
                  sx: {
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center",
                  },
                }}
              >
                {pages?.map((page: any) => {
                  return (
                    <Link {...{ href: page?.link, key: page?.name }}>
                      <Typography
                        {...{
                          fontFamily: "BarlowRegular",
                          fontSize: 16,
                          color: "#ffffff",
                          children: page?.name,
                        }}
                      />
                    </Link>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
