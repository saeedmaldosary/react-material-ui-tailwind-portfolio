import * as React from "react";
import { Link } from "react-scroll";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ChatOutlined, LightMode, DarkMode } from "@mui/icons-material";

const pages = [
  {
    name: "About",
    href: "about",
    offsetMD: -100,
    offsetXS: -100,
  },
  {
    name: "Skills",
    href: "skills",
    offsetMD: -100,
    offsetXS: -80,
  },
  {
    name: "Certifications",
    href: "certifications",
    offsetMD: 0,
    offsetXS: -80,
  },
];

function Header({ change }) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = React.useState(false); // State to track dark mode

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const letsTalkButtonSize = isMdScreen || isSmScreen ? "medium" : "small";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    change(!isDarkMode); // Notify the parent component about the dark mode change
  };

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
                  {page.name}
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
              <DarkMode sx={{ color: theme.palette.primary.action }} />
            ) : (
              <LightMode sx={{ color: theme.palette.primary.action }} />
            )}
          </Box>

          {/* Hire me button */}
          <Box>
            <Link to="letsTalk" smooth={true} offset={100} duration={500}>
              <Button
                variant="outlined"
                size={letsTalkButtonSize}
                sx={{
                  textTransform: "capitalize",
                }}
                startIcon={<ChatOutlined />}
              >
                Let's Talk
              </Button>
            </Link>
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
              <DarkMode sx={{ color: theme.palette.primary.action }} />
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
                      {page.name}
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
