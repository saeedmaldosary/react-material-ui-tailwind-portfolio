import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  useTheme,
} from "@mui/material";

import { LightMode, Brightness2, Public } from "@mui/icons-material";

const pages = [
  {
    title: "aboutTitle",
    href: "about",
    offsetMD: -100,
    offsetXS: -100,
  },
  {
    title: "skillsTitle",
    href: "skills",
    offsetMD: -100,
    offsetXS: -80,
  },
  {
    title: "certificationsTitle",
    href: "certifications",
    offsetMD: 0,
    offsetXS: -80,
  },
];

function Header({ change }) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = React.useState(false); // State to track dark mode

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    change(!isDarkMode);
  };

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const [t, i18n] = useTranslation();

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        mt: 0,
        zIndex: 1,
        position: "sticky",
        top: 0,
      }}
      position="static"
    >
      <Container>
        <Toolbar sx={{ mt: 1 }} disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "4px",
                minWidth: 0,
                padding: 0,
                boxShadow: "none",
                cursor: "default",
              }}
            >
              <Avatar
                sx={{
                  borderRadius: "4px",
                  width: 40,
                  height: 40,
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    color: "#ffff",
                    fontWeight: "bold",
                  }}
                >
                  SA
                </Typography>
              </Avatar>
            </Button>
          </Box>

          {/* Big screen screen menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                smooth={true}
                offset={page.offsetMD}
                duration={500}
              >
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  {t(page.title)}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            onClick={handleToggleDarkMode}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
          >
            {isDarkMode ? (
              <Brightness2 sx={{ color: theme.palette.primary.action }} />
            ) : (
              <LightMode sx={{ color: theme.palette.primary.action }} />
            )}
          </Box>

          <Box sx={{ cursor: "pointer" }} onClick={toggleLanguage}>
            <Public sx={{ color: theme.palette.primary.action }} />
          </Box>
          <Box
            onClick={handleToggleDarkMode}
            sx={{
              display: { xs: "flex", md: "none" },
              ml: 1,
              cursor: "pointer",
            }}
          >
            {isDarkMode ? (
              <Brightness2 sx={{ color: theme.palette.primary.action }} />
            ) : (
              <LightMode sx={{ color: theme.palette.primary.action }} />
            )}
          </Box>

          {/* Small screen menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ p: 0, ml: 1 }}
            >
              <MenuIcon sx={{ color: theme.palette.primary.action }} />
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
                <Link
                  key={page.name}
                  to={page.href}
                  smooth={true}
                  offset={page.offsetXS}
                  duration={500}
                >
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t(page.title)}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
