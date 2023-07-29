import React from "react";
import MUICarousel from "react-material-ui-carousel";
import { useTheme, useMediaQuery, Grid, Card } from "@mui/material";

function Carousel({ skillsData }) {
  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const itemsPerRow = isMdScreen || isSmScreen ? 6 : 3;
  const groupedSkillsData = [];
  for (let i = 0; i < skillsData.length; i += itemsPerRow) {
    groupedSkillsData.push(skillsData.slice(i, i + itemsPerRow));
  }

  return (
    <MUICarousel
      navButtonsProps={{
        style: {
          display: "none",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color:
            theme.components.MuiCarousel.styleOverrides.dot.backgroundColor,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color:
            theme.components.MuiCarousel.styleOverrides.dotActive
              .backgroundColor,
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
                  backgroundColor: "#FFFFFF",
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
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "40px" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </MUICarousel>
  );
}

export default Carousel;
