import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import CertificationsCard from "./CertificationsCard";
import certificationsData from "../../assets/data/certificationsData.js";

const Certifications = () => {
  return (
    <Container id="certifications" sx={{ mb: 6, mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Certifications
      </Typography>
      <CertificationsCard certificationsData={certificationsData} />
    </Container>
  );
};

export default Certifications;
