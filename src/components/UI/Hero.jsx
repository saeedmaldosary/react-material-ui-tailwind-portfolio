import React, { useEffect } from "react";
import { Container, Grid, Typography, Button, useTheme } from "@mui/material";
import { GitHub, LinkedIn, ArrowCircleDown } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import saeedImage from "../../assets/images/SaeedColored.png";
import saeedImageW20 from "../../assets/images/Saeed-w20.png";
import "./Hero.css";

const Hero = () => {
  const theme = useTheme();

  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");

      function loaded() {
        div.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }, []);
  return (
    <Container id="about" className="mt-10">
      <Grid container>
        {/* Text */}
        <Grid item md={8} sm={7} xs={12}>
          <div>
            <Typography sx={{ fontSize: { xs: "22px", md: "24px" } }}>
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
              <Typewriter
                words={[" Software Engineer", "Full Stack Developer"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              👨‍💻
            </Typography>
            <a
              href="https://drive.google.com/file/d/1ATLhgErIMLo7KlIoAVgJGGbOORyH6k9j/view?usp=sharing"
              target="_blank"
            >
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
                startIcon={<ArrowCircleDown />}
              >
                Resume
              </Button>
            </a>
            <Typography
              sx={{ mb: 4, ml: 4, maxWidth: { md: 500, sm: 350 } }}
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
                <GitHub
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
                <LinkedIn
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
        {/* Pic */}
        <Grid item md={4} sm={5} xs={12}>
          <div
            style={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              className="blur-load"
              style={{ backgroundImage: `url(${saeedImageW20})` }}
            >
              <img
                className="heroImage"
                style={{
                  marginTop: "90px",
                }}
                src={saeedImage}
                alt="Transparent Image"
                loading="lazy"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
