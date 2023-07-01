import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Carousel from "./Carousel";

const Skills = () => {
  return (
    <Container id="skills" sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Skills
      </Typography>
      <Carousel />
    </Container>
  );
};

export default Skills;
