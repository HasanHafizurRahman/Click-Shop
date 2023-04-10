import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
background: #2874f0
height: 100%
width: 40%
`;

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              background:
                "#2874f0 url(https://i.ibb.co/hsznSxT/3402967.jpg) center 85% no-repeat",
              height: "100%",
              width: "40%",
              padding: "45px 35px",
            }}
          >
            <Typography variant="h5">Login</Typography>
            <Typography sx={{ marginTop: "20px" }}>
              Get access to your Orders, Wishlists and Recommendations{" "}
            </Typography>
          </Box>
          <Box>
            <TextField
              variant="standard"
              label="Enter your Email/Mobile Number"
            />
            <TextField
              variant="standard"
              label="Enter your Email/Mobile Number"
            />
            <TextField>
              By clicking, you agree to our term's and conditions!
            </TextField>
            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request OTP</Button>
            <Typography>New to ClickShop ? Register Now</Typography>
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
