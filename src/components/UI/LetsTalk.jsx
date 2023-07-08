import {
  Box,
  Container,
  TextField,
  Typography,
  useTheme,
  Snackbar,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const LetsTalk = () => {
  const theme = useTheme();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFailure, setOpenFailure] = React.useState(false);
  const [formCompleted, setFormCompleted] = useState(false); // Track form completion
  const [showFillMessage, setShowFillMessage] = useState(false); // Track whether to show fill message

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formCompleted) {
      // If form is not completed, show fill message
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
    // Check if all form fields have values
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
        <Alert onClose={handleClose} severity="success" sx={{ width: "80%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openFailure}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "80%" }}>
          Message failed to send.
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
          <Box sx={{ ml: { xs: 0, md: 4, sm: 4 } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
            >
              Let's Talk
            </Typography>
            <Typography sx={{ mb: 4, ml: 4, maxWidth: 300 }} variant="body1">
              Reach me out. I can't wait to hear from you! 🤩
            </Typography>
            <Typography sx={{ mb: 4 }} variant="body1" gutterBottom>
              Contact me:
              <a
                href="mailto:Saeedmaldosary@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MailOutlineOutlinedIcon
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
                <PhoneAndroidOutlinedIcon
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
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "4px",
              overflow: "hidden",
            }}
            sx={{
              px: "1.5rem",
              py: { xs: "2rem", md: "3rem" },
            }}
          >
            <Typography
              color="primary"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "20px", md: "22px", sm: "18px" },
              }}
            >
              Send me a message 🚀
            </Typography>
            <form ref={form} onSubmit={sendEmail} onChange={handleChange}>
              <TextField
                focused
                label="Name"
                variant="outlined"
                name="user_name"
                fullWidth
                inputProps={{ maxLength: 70, style: { color: "#FFFFFF" } }}
                sx={{
                  marginBottom: "1rem",
                }}
              />
              <TextField
                label="Email"
                focused
                variant="outlined"
                name="user_email"
                type="email"
                fullWidth
                inputProps={{ maxLength: 254, style: { color: "#FFFFFF" } }}
                sx={{
                  marginBottom: "1rem",
                }}
              />
              <TextField
                label="Message"
                focused
                variant="outlined"
                name="message"
                multiline
                rows={4}
                fullWidth
                inputProps={{ maxLength: 500, style: { color: "#FFFFFF" } }}
                sx={{
                  marginBottom: "1rem",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <LoadingButton
                  disableElevation
                  startIcon={<SendIcon />}
                  variant="contained"
                  type="submit"
                  loading={loading}
                  color="primary"
                  loadingPosition="start"
                  // disabled={!formCompleted} // Disable the button if the form is not completed
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  Send
                </LoadingButton>
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
                >
                  Please fill in all the fields.
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
