import * as React from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const pages = [
  {
    name: "About",
    href: "about",
    offset: 0,
  },
  {
    name: "Skills",
    href: "skills",
    offset: 0,
  },
  {
    name: "Certifications",
    href: "certifications",
    offset: 0,
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        mt: 1,
      }}
      color="primary"
      position="static"
    >
      <Container>
        <Toolbar disableGutters>
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
                borderRadius: "50%",
                minWidth: 0,
                padding: 0,
                boxShadow: "none",
              }}
            >
              <Avatar
                sx={{
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
                  S
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
                to={page.href}
                smooth={true}
                offset={page.offset}
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
                  to={page.href}
                  smooth={true}
                  offset={page.offset}
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
