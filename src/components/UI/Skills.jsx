import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import HTMLImage from "../../assets/images/skills/HTML.png";
import CSSImage from "../../assets/images/skills/CSS.png";
import JavascriptImage from "../../assets/images/skills/Javascript.png";
import VueImage from "../../assets/images/skills/Vue.png";
import ReactImage from "../../assets/images/skills/React.png";
import BootstrapImage from "../../assets/images/skills/Bootstrap.png";
import TailwindImage from "../../assets/images/skills/Tailwind.png";
import WebmethodsImage from "../../assets/images/skills/Webmethods.png";
import NodejsImage from "../../assets/images/skills/Nodejs.png";
import ExpressjsImage from "../../assets/images/skills/Expressjs.png";
import SQLImage from "../../assets/images/skills/SQL.png";
import GitImage from "../../assets/images/skills/Git.png";
// Import other image files for different skills

const Skills = () => {
  const theme = useTheme();

  // Array of skills data
  const skillsData = [
    { id: 1, image: HTMLImage, name: "HTML" },
    { id: 2, image: CSSImage, name: "CSS" },
    { id: 3, image: JavascriptImage, name: "Javascript" },
    { id: 4, image: VueImage, name: "Vue" },
    { id: 5, image: ReactImage, name: "React" },
    { id: 6, image: BootstrapImage, name: "Bootstrap" },
    { id: 7, image: TailwindImage, name: "Tailwind" },
    { id: 8, image: WebmethodsImage, name: "Webmethods" },
    { id: 9, image: NodejsImage, name: "Node.js" },
    { id: 10, image: ExpressjsImage, name: "Express.js" },
    { id: 11, image: SQLImage, name: "SQL" },
    { id: 12, image: GitImage, name: "Git" },

    // Add other skills with their respective image paths
  ];

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skillsData.map((skill) => (
          <Grid item key={skill.id} md={2} xs={4}>
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
      </Grid>
    </Container>
  );
};

export default Skills;
