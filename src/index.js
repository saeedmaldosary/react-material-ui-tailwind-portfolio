import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const textColor = "#193256";
const mainColor = "#8873ef";
const mdScreenMenuColor = "#564899";
const hoverActiveColor = "#564899";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Urbanist",
      // Below the color of text (not include the color of text in the buttons and the text in send me message card)
      // Color of icon in certification cards
      color: textColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: hoverActiveColor,
            color: "#ffffff",
          },
        },
      },
    },
    MuiCarousel: {
      styleOverrides: {
        dot: {
          backgroundColor: mainColor,
        },
        dotActive: {
          backgroundColor: hoverActiveColor,
        },
      },
    },
  },
  palette: {
    primary: {
      // Below for Header background color
      // certifications color background(orgs logo background)
      //  button of send me message card
      // send me message text
      // Color of Text in preload logo
      main: "#ffffff",
      // Below the color of text for button in send me message card
      contrastText: mainColor,
    },
    secondary: {
      // Below for Logo Preloader card and cards and buttons
      main: mainColor,
      // Below for menu in big screen About , Skills, Certification
      contrastText: mdScreenMenuColor,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
