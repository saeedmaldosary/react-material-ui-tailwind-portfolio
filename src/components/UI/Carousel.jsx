import React from "react";
import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import skillsData from "../../assets/data/skillsData.js";

function Example() {
  const theme = useTheme();

  // Group the skills data into an array of arrays, each containing four items
  const itemsPerRow = 6;
  const groupedSkillsData = [];
  for (let i = 0; i < skillsData.length; i += itemsPerRow) {
    groupedSkillsData.push(skillsData.slice(i, i + itemsPerRow));
  }

  return (
    <Carousel
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          display: "none",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: "#564899",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#beb1fa",
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
    </Carousel>
  );
}

export default Example;
