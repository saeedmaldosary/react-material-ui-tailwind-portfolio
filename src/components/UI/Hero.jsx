import React from "react";
import { Container, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import saeedImage from "../../assets/images/Saeed.png";

const Hero = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <div className="bg-slate-500">Content 1</div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div
            style={{
              backgroundColor: theme.palette.secondary.main, // Access the secondary color from theme
              borderRadius: "35%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                marginTop: "90px", // Adjust the value as needed
              }}
              src={saeedImage}
              alt="Transparent Image"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
