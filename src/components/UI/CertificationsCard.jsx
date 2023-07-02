import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box, useTheme } from "@mui/material";

function CertificationsCard({ certificationsData }) {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2}>
        {certificationsData.map((item) => (
          <Grid key={item.id} item xs={6} md={2} sm={3}>
            <Card
              variant="outlined"
              sx={{
                boxShadow: 0,
                backgroundColor: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,

                height: "100%",
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
                      sx={{ color: "#ffff", fontWeight: "bold" }}
                      variant="body1"
                    >
                      {item.IssuingORG}
                    </Typography>
                    <Typography
                      sx={{ color: "#ffff", pb: "20px" }}
                      variant="body2"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CertificationsCard;
