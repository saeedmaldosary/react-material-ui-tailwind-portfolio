import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Carousel from "./Carousel";

// Import other image files for different skills

const Skills = () => {
  const theme = useTheme();

  return (
    <Container id="skills" sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Skills
      </Typography>

      <Carousel />

      {/* <Grid container spacing={2}>
        {skillsData.map((skill) => (
          <Grid item key={skill.id} md={2} sm={2} xs={4}>
            <Card
              variant="outlined"
              sx={{
                borderColor: theme.palette.secondary.main,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                style={{ width: "40px" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default Skills;
