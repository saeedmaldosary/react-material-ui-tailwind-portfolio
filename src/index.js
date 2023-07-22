import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const isDarkMode = true;
const colorsMode = isDarkMode ? "dark" : "light";

const colors = {
  text: { light: "#2d1b74", dark: "#ffffff" },
  main: { light: "#8873ef", dark: "#8873ef" },
  action: { light: "#8873ef", dark: "#ffffff" },
  mdScreenMenu: { light: "#2d1b74", dark: "#ffffff" },
  xsScreenMenu: { light: "#2d1b74", dark: "#2d1b74" },
  hoverActive: { light: "#2d1b74", dark: "#ffffff" },
  carouselActive: { light: "#2d1b74", dark: "#8873ef" },
  carousel: { light: "#8873ef", dark: "#b8abf5" },
  buttonHoverTextColor: { light: "#FFFFFF", dark: "#2d1b74" },
  background: { light: "#ffffff", dark: "#2d1b74" },
  outlinedButtonHover: { light: "#2d1b74", dark: "#8873ef" },
  outlinedButtonHoverTextColor: { light: "#ffffff", dark: "#ffffff" },
  loadingButton: { light: "#ffffff", dark: "#2d1b74" },
  loadingButtonTextColor: { light: "#8873ef", dark: "#ffffff" },
  loadingButtonTHover: { light: "#2d1b74", dark: "#FFFFFF" },
  loadingButtonHoverTextColor: { light: "#FFFFFF", dark: "#2d1b74" },
};

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Urbanist",
      // Below the color of text (not include the color of text in the buttons and the text in send me message card)
      // Color of icon in certification cards
      color: colors.text[colorsMode],
    },
  },
  components: {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.loadingButton[colorsMode],
          color: colors.loadingButtonTextColor[colorsMode],
          "&:hover": {
            backgroundColor: colors.loadingButtonTHover[colorsMode],
            color: colors.loadingButtonHoverTextColor[colorsMode],
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            color: colors.xsScreenMenu[colorsMode],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: colors.hoverActive[colorsMode],
            color: colors.background[colorsMode],
          },
        },
        contained: {
          backgroundColor: colors.main[colorsMode], // Replace this with your desired background color
          color: "#ffffff",
          "&:hover": {
            backgroundColor: colors.hoverActive[colorsMode],
            color: colors.buttonHoverTextColor[colorsMode],
          },
        },
        outlined: {
          "&:hover": {
            backgroundColor: colors.outlinedButtonHover[colorsMode],
            color: colors.outlinedButtonHoverTextColor[colorsMode],
          },
        },
      },
    },
    MuiCarousel: {
      styleOverrides: {
        dot: {
          backgroundColor: colors.carousel[colorsMode],
        },
        dotActive: {
          backgroundColor: colors.carouselActive[colorsMode],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background[colorsMode],
        },
      },
    },
  },
  palette: {
    background: {
      default: colors.background[colorsMode],
    },
    primary: {
      // Below for Header background color
      // certifications color background(orgs logo background)
      //  button of send me message card
      // send me message text
      // Color of Text in preload logo
      main: "#ffffff",
      // Below the color of text for button in send me message card
      contrastText: colors.main[colorsMode],
      action: colors.action[colorsMode],
    },
    secondary: {
      // Below for Logo Preloader card and cards and buttons
      main: colors.main[colorsMode],
      // Below for menu in big screen About , Skills, Certification
      contrastText: colors.mdScreenMenu[colorsMode],
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>
);
