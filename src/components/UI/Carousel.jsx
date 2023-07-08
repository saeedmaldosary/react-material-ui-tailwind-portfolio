import React, { useEffect } from "react";
import MUICarousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useTheme, useMediaQuery } from "@mui/material";
import "./ImageLazyLoad.css";

function Carousel({ skillsData }) {
  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const itemsPerRow = isMdScreen || isSmScreen ? 6 : 3;
  const groupedSkillsData = [];
  for (let i = 0; i < skillsData.length; i += itemsPerRow) {
    groupedSkillsData.push(skillsData.slice(i, i + itemsPerRow));
  }

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
    <MUICarousel
      navButtonsProps={{
        style: {
          display: "none",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: "#beb1fa",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#564899",
        },
      }}
    >
      {groupedSkillsData.map((row, rowIndex) => (
        <Grid key={rowIndex} container spacing={2}>
          {row.map((item) => (
            <Grid key={item.id} item xs={4} md={2} sm={2}>
              <Card
                variant="outlined"
                sx={{
                  borderColor: theme.palette.secondary.main,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  minHeight: "100px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  className="blur-load"
                  style={{ backgroundImage: `url(${item.imageW20})` }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px" }}
                  />
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </MUICarousel>
  );
}

export default Carousel;
