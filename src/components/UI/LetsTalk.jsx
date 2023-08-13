import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  useTheme,
  Snackbar,
  Grid,
  Alert,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import {
  PhoneAndroidOutlined,
  MailOutlineOutlined,
  Send,
} from "@mui/icons-material";

const LetsTalk = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const direction = theme.direction === "rtl";

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFailure, setOpenFailure] = React.useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [showFillMessage, setShowFillMessage] = useState(false);

  const textFieldStyle = {
    marginBottom: "1rem",
    ...(direction
      ? {
          "& label": {
            left: "unset",
            right: "1.75rem",
            transformOrigin: "right",
          },
          "& legend": {
            textAlign: "right",
          },
        }
      : {}),
  };
  const snackbarStyle = {
    "& svg": {
      mx: 2,
    },
  };

  const sendButtonIconsStyle = direction ? { ml: 1 } : { mr: 1 };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formCompleted) {
      setShowFillMessage(true);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setOpenSuccess(true);
          setLoading(false);
        },
        (error) => {
          setOpenFailure(true);
          setLoading(false);
        }
      );
  };

  const handleChange = () => {
    const formData = new FormData(form.current);
    const isFormCompleted = [...formData.values()].every(
      (value) => value.trim() !== ""
    );
    setFormCompleted(isFormCompleted);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFailure(false);
    setOpenSuccess(false);
  };

  return (
    <Container id="letsTalk" sx={{ mb: 5 }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert sx={snackbarStyle} onClose={handleClose} severity="success">
          {t("messageSent")}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openFailure}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert sx={snackbarStyle} onClose={handleClose} severity="error">
          {t("messageFailed")}
        </Alert>
      </Snackbar>
      <Grid container>
        {/* below for text */}
        <Grid
          sx={{
            mt: { xs: 0, md: 0 },
            order: { xs: 1, md: 2, sm: 2 },
          }}
          item
          md={7}
          sm={7}
          xs={12}
        >
          <Box sx={{ mx: { xs: 0, md: 4, sm: 4 } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "28px", md: "32px" },
                letterSpacing: { xs: -1 },
              }}
              variant="body1"
            >
              {t("letsTalkTitle")}
            </Typography>
            <Typography sx={{ mb: 4, mx: 4, maxWidth: 250 }} variant="body1">
              {t("letsTalkBody")}
            </Typography>
            <Typography sx={{ mb: 4 }} variant="body1" gutterBottom>
              {t("contactMe")}
              <a
                href="mailto:Saeedmaldosary@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MailOutlineOutlined
                  style={{
                    verticalAlign: "middle",
                    fontSize: "1.2rem",
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                  }}
                />
              </a>
              <a
                href="tel:+966566474961"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PhoneAndroidOutlined
                  style={{
                    verticalAlign: "middle",
                    fontSize: "1.2rem",
                    marginRight: "0.5rem",
                  }}
                />
              </a>
            </Typography>
          </Box>
        </Grid>
        {/* below for form */}
        <Grid
          item
          md={5}
          sm={5}
          xs={12}
          sx={{ order: { xs: 2, md: 1, sm: 1 } }}
        >
          <Box
            style={{
              borderRadius: "4px",
              overflow: "hidden",
            }}
            sx={{
              px: "1.5rem",
              py: { xs: "2rem", md: "3rem" },
              backgroundColor: theme.palette.box.main,
            }}
          >
            <Typography
              sx={{
                color: "#ffff",
                mb: 2,
                fontWeight: "bold",
                letterSpacing: { xs: -1 },
                fontSize: { xs: "20px", md: "22px", sm: "18px" },
              }}
            >
              {t("formTitle")}
            </Typography>
            <form ref={form} onSubmit={sendEmail} onChange={handleChange}>
              <TextField
                focused
                label={t("name")}
                color="textField"
                variant="outlined"
                name="user_name"
                fullWidth
                inputProps={{ maxLength: 70, style: { color: "#FFFFFF" } }}
                sx={textFieldStyle}
              />
              <TextField
                label={t("email")}
                color="textField"
                focused
                variant="outlined"
                name="user_email"
                type="email"
                fullWidth
                inputProps={{
                  maxLength: 254,
                  style: { color: "#FFFFFF" },
                }}
                sx={textFieldStyle}
              />
              <TextField
                label={t("message")}
                focused
                variant="outlined"
                color="textField"
                name="message"
                multiline
                rows={4}
                fullWidth
                inputProps={{
                  maxLength: 500,
                  style: { color: "#FFFFFF" },
                }}
                sx={textFieldStyle}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Button
                  className="sendButton"
                  disableElevation
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  sx={{
                    textTransform: "capitalize",
                    opacity: loading ? 0.5 : 1,
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={sendButtonIconsStyle} />
                  ) : (
                    <Send sx={sendButtonIconsStyle} />
                  )}
                  {t("sendButton")}
                </Button>
              </Box>
            </form>
            {showFillMessage && (
              <Snackbar
                open={showFillMessage}
                autoHideDuration={6000}
                onClose={() => setShowFillMessage(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setShowFillMessage(false)}
                  severity="warning"
                  sx={snackbarStyle}
                >
                  {t("fillForm")}
                </Alert>
              </Snackbar>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LetsTalk;
