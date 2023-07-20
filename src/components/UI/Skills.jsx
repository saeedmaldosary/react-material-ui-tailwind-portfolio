import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Carousel from "./SkillsCarousel";
import skillsData from "../../assets/data/skillsData.js";

const Skills = () => {
  return (
    <Container id="skills" sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Skills
      </Typography>
      <Carousel skillsData={skillsData} />
    </Container>
  );
};

export default Skills;
