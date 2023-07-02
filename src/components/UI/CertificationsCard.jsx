import React from "react";
import Grid from "@mui/material/Grid";
import MUICarousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box, useTheme, useMediaQuery } from "@mui/material";

function CertificationsCard({ certificationsData }) {
  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const itemsPerRow = isMdScreen ? 4 : 2;
  const groupedCertificationsData = [];
  for (let i = 0; i < certificationsData.length; i += itemsPerRow) {
    groupedCertificationsData.push(
      certificationsData.slice(i, i + itemsPerRow)
    );
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
          color: "#beb1fa",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#564899",
        },
      }}
    >
      {groupedCertificationsData.map((row, rowIndex) => (
        <Grid key={rowIndex} container spacing={2}>
          {row.map((item) => (
            <Grid key={item.id} item xs={6} md={3} sm={3}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 0,
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  height: "100%",
                  minHeight: { xs: "230px", md: "100%" },
                  position: "relative",
                }}
              >
                <Grid container spacing={2}>
                  <Grid key={item.id} item xs={12} md={12} sm={12}>
                    <Card
                      id="nestedCard"
                      sx={{
                        boxShadow: 0,
                        borderRadius: 0,
                        height: "100px",
                        backgroundColor: theme.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          display: "block",
                          margin: "0 auto",
                          width: "40px",
                        }}
                      />
                    </Card>
                  </Grid>
                  <Grid key={item.id} item xs={12} md={12} sm={12}>
                    <Box sx={{ px: "20px" }}>
                      <Typography
                        sx={{ color: "#ffff", fontWeight: 600 }}
                        variant="body1"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{ color: "#ffff", pb: "20px" }}
                        variant="body2"
                        gutterBottom
                      >
                        {item.IssuingORG}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </MUICarousel>
  );
}

export default CertificationsCard;
