import React, { useState, useEffect } from "react";
import { Typography, Button, Box, useTheme } from "@mui/material";
import { Fade } from "react-reveal";

const PreLoader = () => {
  const duration = 1500;
  const theme = useTheme();
  const [showPreLoader, setShowPreLoader] = useState(false);

  useEffect(() => {
    setShowPreLoader(true);
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const buttonSize = 150;
  const logoFontSize = 80;

  return (
    <Fade in={showPreLoader} duration={duration}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: { md: "100vh", xs: "85vh" }, // Set the height to full viewport height
        }}
      >
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: "6px",
            boxShadow: "none",
            width: buttonSize,
            height: buttonSize,
            cursor: "default",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          <Typography
            variant="h1"
            component="span"
            sx={{
              letterSpacing: -2,
              fontWeight: "bold",
              fontSize: logoFontSize,
              color: theme.palette.primary.main,
            }}
          >
            SA
          </Typography>
        </Button>
      </Box>
    </Fade>
  );
};

export default PreLoader;
