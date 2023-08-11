import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTranslation } from "react-i18next";
import CertificationsCard from "./CertificationsCarousel";
import certificationsData from "../../assets/data/certificationsData.js";

const Certifications = () => {
  const [t] = useTranslation();
  return (
    <Container id="certifications" sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        {t("certificationsTitle")}
      </Typography>
      <CertificationsCard certificationsData={certificationsData} />
    </Container>
  );
};

export default Certifications;
