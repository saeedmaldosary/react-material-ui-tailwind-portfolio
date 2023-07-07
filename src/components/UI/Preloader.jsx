import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Fade } from "react-reveal";

const PreLoader = () => {
  const duration = 1500;
  const [showPreLoader, setShowPreLoader] = useState(false);

  useEffect(() => {
    setShowPreLoader(true);
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

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
            borderRadius: "4px",
            boxShadow: "none",
            width: 150,
            height: 150,
          }}
        >
          <Typography
            variant="body1"
            component="span"
            color="primary"
            sx={{
              fontWeight: "bold",
              fontSize: "80px",
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
