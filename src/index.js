import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/urbanist"; // Import the font

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Urbanist",
      color: "#193256",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#564899",
            color: "#ffff",
          },
        },
      },
    },
  },
  palette: {
    action: {
      disabledBackground: "#564899",
      disabled: "#ffff",
    },
    primary: {
      main: "#ffffff",
      contrastText: "#8873ef",
    },
    secondary: {
      main: "#8873ef",
      contrastText: "#564899",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
