import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);

  const isDarkMode = darkMode;
  const colorsMode = isDarkMode ? "dark" : "light";

  const colors = {
    background: { light: "#ffffff", dark: "#2d1b74" },
    text: { light: "#2d1b74", dark: "#ffffff" },
    main: { light: "#8873ef", dark: "#8873ef" },
    action: { light: "#8873ef", dark: "#ffffff" },
    mdScreenMenu: { light: "#2d1b74", dark: "#ffffff" },
    xsScreenMenu: { light: "#2d1b74", dark: "#2d1b74" },
    cardBackground: { light: "#8873ef", dark: "#8873ef" },
    cardBorder: { light: "#8873ef", dark: "#8873ef" },
    boxBackground: { light: "#8873ef", dark: "#8873ef" },
    avatarBackground: { light: "#8873ef", dark: "#8873ef" },
    carouselActive: { light: "#2d1b74", dark: "#8873ef" },
    carouselInactive: { light: "#8873ef", dark: "#b8abf5" },
    buttonHover: { light: "#2d1b74", dark: "#ffffff" },
    buttonHoverText: { light: "#ffffff", dark: "#2d1b74" },
    containedButton: { light: "#8873ef", dark: "#8873ef" },
    outlinedButton: {
      light: "rgba(136, 115, 239, 0.5)",
      dark: "rgba(255, 255, 255, 0.5)",
    },
    outlinedButtonText: {
      light: "#8873ef",
      dark: "#ffffff",
    },
    outlinedButtonHover: { light: "#2d1b74", dark: "#ffffff" },
    outlinedButtonBorderHover: { light: "#8873ef", dark: "#8873ef" },
    outlinedButtonHoverText: { light: "#ffffff", dark: "#2d1b74" },
    loadingButton: { light: "#ffffff", dark: "#2d1b74" },
    loadingButtonText: { light: "#8873ef", dark: "#ffffff" },
    loadingButtonHover: { light: "#2d1b74", dark: "#FFFFFF" },
    loadingButtonHoverText: { light: "#FFFFFF", dark: "#2d1b74" },
  };

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Urbanist",
        color: colors.text[colorsMode],
      },
    },
    components: {
      MuiAvatar: {
        styleOverrides: {
          root: {
            backgroundColor: colors.avatarBackground[colorsMode],
          },
        },
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            backgroundColor: colors.loadingButton[colorsMode],
            color: colors.loadingButtonText[colorsMode],
            "&:hover": {
              backgroundColor: colors.loadingButtonHover[colorsMode],
              color: colors.loadingButtonHoverText[colorsMode],
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
              backgroundColor: colors.buttonHover[colorsMode],
              color: colors.buttonHoverText[colorsMode],
            },
          },
          contained: {
            backgroundColor: colors.containedButton[colorsMode],
            color: "#ffffff",
            "&:hover": {
              backgroundColor: colors.buttonHover[colorsMode],
              color: colors.buttonHoverText[colorsMode],
            },
          },
          outlined: {
            borderColor: colors.outlinedButton[colorsMode],
            color: colors.outlinedButtonText[colorsMode],
            "&:hover": {
              backgroundColor: colors.outlinedButtonHover[colorsMode],
              borderColor: colors.outlinedButtonBorderHover[colorsMode],
              color: colors.outlinedButtonHoverText[colorsMode],
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: colors.cardBackground[colorsMode],
            borderColor: colors.cardBorder[colorsMode],
          },
        },
      },
      MuiCarousel: {
        styleOverrides: {
          dot: {
            backgroundColor: colors.carouselInactive[colorsMode],
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
        main: "#FFFFFF",
        action: colors.action[colorsMode],
      },
      secondary: {
        main: "#FFC0CB",
        contrastText: colors.mdScreenMenu[colorsMode],
      },
      box: {
        main: colors.boxBackground[colorsMode],
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App change={() => setDarkMode(!darkMode)} />
      </ThemeProvider>
    </React.Fragment>
  );
};

createRoot(document.getElementById("root")).render(<AppWrapper />);
