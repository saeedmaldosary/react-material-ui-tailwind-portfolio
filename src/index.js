import React, { useState } from "react";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import colors from "./assets/colors/colors.js";
import palette from "./assets/colors/palette.js";

const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // useEffect(() => {
  //   console.log("Current Language: ", currentLanguage);
  // }, [currentLanguage]);

  const isDarkMode = darkMode;
  const colorsMode = isDarkMode ? "dark" : "light";

  const direction = currentLanguage === "ar" ? "rtl" : "ltr";

  const theme = createTheme({
    direction: direction,
    typography: {
      allVariants: {
        fontFamily: currentLanguage === "ar" ? "Vazirmatn" : "Urbanist",
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
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "& .MuiTypography-root": {
              color: colors.xsScreenMenu[colorsMode],
            },
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: {
            color: colors.circularProgress[colorsMode],
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&.sendButton": {
              backgroundColor: colors.sendButton[colorsMode],
              color: colors.sendButtonText[colorsMode],
              "&:hover": {
                backgroundColor: colors.sendButton[colorsMode],
                color: colors.sendButtonText[colorsMode],
              },
            },
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
      <div dir={direction}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App
            change={() => setDarkMode(!darkMode)}
            setCurrentLanguage={setCurrentLanguage}
            currentLanguage={currentLanguage}
          />
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
};

createRoot(document.getElementById("root")).render(<AppWrapper />);
