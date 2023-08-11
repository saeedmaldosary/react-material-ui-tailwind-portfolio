import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/system";
import Carousel from "./SkillsCarousel";
import skillsData from "../../assets/data/skillsData.js";

const Skills = () => {
  const [t] = useTranslation();
  return (
    <Container id="skills" sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        {t("skillsTitle")}
      </Typography>
      <Carousel skillsData={skillsData} />
    </Container>
  );
};

export default Skills;
