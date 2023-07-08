import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
