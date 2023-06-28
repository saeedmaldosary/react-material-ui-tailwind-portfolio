import React from "react";
import { Container, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import saeedImage from "../../assets/images/Saeed.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const Hero = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container className="mt-10">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <div>
            <Typography
              sx={{ mb: 2 }}
              variant={isMdScreen ? "h6" : "body1"}
              gutterBottom
            >
              Hello,
            </Typography>
            <Typography
              sx={{
                mb: 0,
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
              gutterBottom
            >
              I'm Saeed Aldosary
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                mb: 4,
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
              gutterBottom
            >
              Software Engineer 👨‍💻
            </Typography>
            <Button
              color="secondary"
              sx={{
                mb: 4,
                boxShadow: 0,
                color: "#ffff",
                textTransform: "capitalize",
              }}
              variant="contained"
              startIcon={<ArrowCircleDownIcon />}
            >
              Resume
            </Button>
            <Typography
              sx={{ mb: 4, ml: 4, mr: 4 }}
              variant="body1"
              gutterBottom
            >
              Application developer in-depth knowledge of software application
              development as well as proficiency in providing solutions.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Follow me:
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <GitHubIcon
                  style={{
                    verticalAlign: "middle",
                    fontSize: "1.2rem",
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                  }}
                />
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <LinkedInIcon
                  style={{
                    verticalAlign: "middle",
                    fontSize: "1.2rem",
                    marginRight: "0.5rem",
                  }}
                />
              </a>
            </Typography>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div
            style={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "35%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                marginTop: "90px",
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
