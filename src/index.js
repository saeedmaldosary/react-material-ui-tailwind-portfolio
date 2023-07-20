import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Urbanist",
      // Below the color of text (not include the color of text in the buttons and the text in send me message card)
      color: "#193256",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#564899",
            color: "#ffffff",
          },
        },
      },
    },
    MuiCarousel: {
      styleOverrides: {
        dot: {
          backgroundColor: "#8873ef",
        },
        dotActive: {
          backgroundColor: "#564899",
        },
      },
    },
  },
  palette: {
    primary: {
      // Below for Header background color
      // certifcation color backgtound(orgs logo background)
      //  button of send me message card
      // send me message text
      // Color of Text in preload logo
      main: "#ffffff",
      // Below the color of text for button in send me message card
      contrastText: "#8873ef",
    },
    secondary: {
      // Below for Logo Preloader card and cards and buttons
      main: "#8873ef",
      // Below for menu in big screen About , Skills, Certification
      contrastText: "#564899",
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
