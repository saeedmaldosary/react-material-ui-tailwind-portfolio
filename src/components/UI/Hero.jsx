import React, { useEffect } from "react";
import { Container, Grid, Typography, Button, Card } from "@mui/material";
import { GitHub, LinkedIn, ArrowCircleDown } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import saeedImage from "../../assets/images/Saeed.png";
import saeedImageW20 from "../../assets/images/Saeed-w20.png";
import "./Hero.css";

const Hero = () => {
  const theme = useTheme();
  const direction = theme.direction === "rtl";
  const resumeButtonStyle = direction ? { ml: 1 } : { mr: 1 };
  const aboutBodyStyle = {
    mb: 4,
    ...(direction
      ? { mr: 4, maxWidth: { md: 300, sm: 350 } }
      : { ml: 4, maxWidth: { md: 500, sm: 350 } }),
  };
  const typewriterStyle = {
    fontWeight: "bold",
    mb: 3,
    letterSpacing: { xs: -1, md: 0 },
    fontSize: { xs: "28px", md: "32px" },
    ...(direction ? { direction: "ltr", textAlign: "right" } : {}),
  };

  const [t] = useTranslation();
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");

      function loaded() {
        div.classList.add("loaded");
        div.style.backgroundImage = "";
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
              {t("hello")}
            </Typography>
            <Typography
              sx={{
                mb: 0,
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "32px" },
                letterSpacing: { xs: -1, md: 0 },
              }}
              variant="body1"
            >
              {t("heroName")}
            </Typography>
            <Typography sx={typewriterStyle} variant="body1">
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
              rel="noreferrer"
            >
              <Button
                disableElevation
                sx={{
                  mb: 3,
                  boxShadow: 0,
                  color: "#ffff",
                  textTransform: "capitalize",
                }}
                variant="contained"
              >
                <ArrowCircleDown sx={resumeButtonStyle} />
                {t("resumeButton")}
              </Button>
            </a>
            <Typography sx={aboutBodyStyle} variant="body1">
              {t("aboutBody")}
            </Typography>
            <Typography sx={{ mb: 4 }} variant="body1" gutterBottom>
              {t("followMe")}
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
          <Card
            elevation={0}
            style={{
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
                alt="Transparent"
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
