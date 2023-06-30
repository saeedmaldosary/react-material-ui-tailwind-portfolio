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

  return (
    <Container className="mt-10">
      <Grid container>
        <Grid item md={8} sm={8} xs={12}>
          <div>
            <Typography sx={{ mb: 2, fontSize: { xs: "22px", md: "24px" } }}>
              Hello,
            </Typography>
            <Typography
              sx={{
                mb: 0,
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
            >
              I'm Saeed Aldosary
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
            >
              Software Engineer 👨‍💻
            </Typography>
            <Button
              disableElevation
              color="secondary"
              sx={{
                mb: 3,
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
              sx={{ mb: 4, ml: 4, maxWidth: { md: 500, sm: 400 } }}
              variant="body1"
            >
              Application developer in-depth knowledge of software application
              development as well as proficiency in providing solutions.
            </Typography>
            <Typography sx={{ mb: 4 }} variant="body1" gutterBottom>
              Follow me:
              <a
                href="https://github.com/saeedmaldosary"
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
                href="https://linkedin.com/in/smaldosary"
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
        <Grid item md={4} sm={4} xs={12}>
          <div
            style={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "4%",
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
