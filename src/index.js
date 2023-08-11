import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);

  const isDarkMode = darkMode;
  const colorsMode = isDarkMode ? "dark" : "light";

  const palette = {
    color1: {
      value: "#ffffff",
    },
    color2: {
      value: "#322653",
    },
    color3: {
      value: "#8873ef",
    },
  };

  const colors = {
    background: {
      light: palette.color1.value,
      dark: palette.color2.value,
    },
    text: { light: palette.color2.value, dark: palette.color1.value },
    action: { light: palette.color3.value, dark: palette.color1.value },
    mdScreenMenu: {
      light: palette.color2.value,
      dark: palette.color1.value,
    },
    xsScreenMenu: {
      light: palette.color2.value,
      dark: palette.color2.value,
    },
    cardBackground: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    cardBorder: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    boxBackground: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    avatarBackground: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    carouselActive: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    carouselInactive: {
      light: palette.color3.value + "80",
      dark: palette.color3.value + "80",
    },
    buttonHover: {
      light: palette.color2.value,
      dark: palette.color1.value,
    },
    buttonHoverText: {
      light: palette.color1.value,
      dark: palette.color2.value,
    },
    containedButton: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    containedButtonText: {
      light: palette.color1.value,
      dark: palette.color1.value,
    },
    outlinedButton: {
      light: palette.color3.value + "80",
      dark: palette.color1.value + "80",
    },
    outlinedButtonText: {
      light: palette.color3.value,
      dark: palette.color1.value,
    },
    outlinedButtonHover: {
      light: palette.color2.value,
      dark: palette.color1.value,
    },
    outlinedButtonBorderHover: {
      light: palette.color3.value,
      dark: palette.color3.value,
    },
    outlinedButtonHoverText: {
      light: palette.color1.value,
      dark: palette.color2.value,
    },
    loadingButton: {
      light: palette.color1.value,
      dark: palette.color1.value,
    },
    loadingButtonText: {
      light: palette.color2.value,
      dark: palette.color2.value,
    },
    loadingButtonHover: {
      light: palette.color2.value,
      dark: palette.color2.value,
    },
    loadingButtonHoverText: {
      light: palette.color1.value,
      dark: palette.color1.value,
    },
    textField: {
      light: palette.color1.value,
      dark: palette.color1.value,
    },
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
            color: colors.mdScreenMenu[colorsMode],
            "&:hover": {
              backgroundColor: colors.buttonHover[colorsMode],
              color: colors.buttonHoverText[colorsMode],
            },
          },
          contained: {
            backgroundColor: colors.containedButton[colorsMode],
            color: colors.containedButtonText[colorsMode],
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
        main: palette.color3.value,
      },
      box: {
        main: colors.boxBackground[colorsMode],
      },
      textField: {
        main: colors.textField[colorsMode],
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
