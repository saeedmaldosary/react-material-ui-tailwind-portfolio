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
} from "@mui/material";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

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

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
      color="primary"
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
              }}
            >
              <Avatar
                sx={{
                  borderRadius: "4px",
                  width: 40,
                  height: 40,
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  color="primary"
                  sx={{
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
                    color: "secondary.contrastText",
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

          {/* Hire me button */}
          <Box>
            <Link to="letsTalk" smooth={true} offset={100} duration={500}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ textTransform: "capitalize" }}
                startIcon={<ChatOutlinedIcon />}
              >
                Let's Talk
              </Button>
            </Link>
          </Box>

          {/* Small screen menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ p: 0, pl: 1 }}
              color="secondary"
            >
              <MenuIcon />
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
                    <Typography textAlign="center">{page.name}</Typography>
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
