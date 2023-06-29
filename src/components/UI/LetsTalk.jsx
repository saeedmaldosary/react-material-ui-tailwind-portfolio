import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";

const LetsTalk = () => {
  const theme = useTheme();
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      setLoading(false);
    }, 4000);

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_SERVICE_ID,
    //     process.env.REACT_APP_TEMPLATE_ID,
    //     form.current,
    //     process.env.REACT_APP_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("Success");
    //       setLoading(false);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       console.log("Error");
    //       setLoading(false);
    //     }
    //   );
  };

  return (
    <Container sx={{ mb: 5 }}>
      <Grid container>
        {/* below for text */}
        <Grid
          sx={{
            mt: { xs: 0, md: 0 },
            order: { xs: 1, md: 2, sm: 2 },
          }}
          item
          md={8}
          sm={7}
          xs={12}
        >
          <Box sx={{ ml: { xs: 0, md: 4 } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "32px" },
              }}
              variant="body1"
            >
              Let's Talk
            </Typography>
            <Typography sx={{ mb: 4, ml: 4, maxWidth: 300 }} variant="body1">
              Reach me out. I can't wait to hear from you! 😚
            </Typography>
          </Box>
        </Grid>
        {/* below for form */}
        <Grid
          item
          md={4}
          sm={5}
          xs={12}
          sx={{ order: { xs: 2, md: 1, sm: 1 } }}
        >
          <Box
            style={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "35%",
              overflow: "hidden",
              padding: "3.5rem",
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
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                focused
                label="Name"
                variant="outlined"
                name="user_name"
                fullWidth
                inputProps={{ style: { color: "#FFFFFF" } }}
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
                inputProps={{ style: { color: "#FFFFFF" } }}
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
                inputProps={{ style: { color: "#FFFFFF" } }}
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
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  Send
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LetsTalk;
