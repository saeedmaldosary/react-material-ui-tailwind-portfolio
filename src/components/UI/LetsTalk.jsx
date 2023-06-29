import { Box, Container } from "@mui/system";
import { Typography, useTheme } from "@mui/material";

import React, { Component } from "react";
import Grid from "@mui/material/Grid";

const LetsTalk = () => {
  const theme = useTheme();
  return (
    <Container sx={{ mb: 5 }}>
      <Grid container>
        {/* below for text */}
        <Grid
          sx={{
            mt: { xs: 0, md: 5 },
            order: { xs: 1, md: 2 },
          }}
          item
          md={8}
          xs={12}
        >
          <Box sx={{ ml: { xs: 0, md: 4 } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
            >
              Let's Chat
            </Typography>
            <Typography sx={{ mb: 4, ml: 4, maxWidth: 350 }} variant="body1">
              Send me a message, and let's start a conversation. I can't wait to
              hear from you! 😚
            </Typography>
          </Box>
        </Grid>
        {/* below for form */}
        <Grid item md={4} xs={12} sx={{ order: { xs: 2, md: 1 } }}>
          <div
            style={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "5%",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                mb: 0,
                fontWeight: "bold",
                height: "400px",
                fontSize: { xs: "28px", md: "32px" },
              }}
              color="primary"
              variant="body1"
            >
              Let's Chat
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LetsTalk;
