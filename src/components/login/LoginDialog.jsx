import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { authenticateUser } from "../../service/api";

// Initial STATEs
const initialAccount = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlists and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subheading: "Sign up with your mobile number to proceed.",
  },
};

const initialRegister = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
};

// styled components
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

// style objects
const boxContainer = { display: "flex", height: "100%" };
const LoginButton = {
  textTransform: "none",
  borderRadius: "3px",
  background: "#FB641B",
  color: "white",
  height: "48px",
};
const OtpButton = {
  textTransform: "none",
  borderRadius: "3px",
  height: "48px",
  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
};

const Image = {
  background:
    "#2874f0 url(https://i.ibb.co/hsznSxT/3402967.jpg) center 85% no-repeat",
  height: "79%",
  width: "30%",
  padding: "45px 35px",
};
const RegisterLink = {
  fontSize: "14px",
  textAlign: "center",
  color: "#2874f0",
  fontWeight: "600",
  cursor: "pointer",
};

const terms = { fontSize: "12px", color: "#878787" };

const paragraph = { marginTop: "20px", color: "white" };

const LoginDialog = ({ open, setOpen }) => {
  const [account, setAccount] = useState(initialAccount.login);
  const [register, setRegister] = useState(initialRegister);

  // click event handlers
  const handleClose = () => {
    setOpen(false);
    setAccount(initialAccount.login);
  };
  const handleSignup = () => {
    setAccount(initialAccount.signup);
  };

  const handlechange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleRegisterUser = async () => {
    await authenticateUser(register);
  };

  // jsx
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box sx={boxContainer}>
          <Box sx={Image}>
            <Typography variant="h5" color="white" fontSize="600">
              {account.heading}
            </Typography>
            <Typography sx={paragraph}>{account.subheading}</Typography>
          </Box>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter your Email/Mobile Number"
              />
              <TextField
                variant="standard"
                label="Enter your Email/Mobile Number"
              />
              <Typography sx={terms}>
                By clicking, you agree to our term's and conditions!
              </Typography>
              <Button style={LoginButton}>Login</Button>
              <Typography sx={{ textAlign: "center" }}>OR</Typography>
              <Button style={OtpButton}>Request OTP</Button>
              <Typography onClick={() => handleSignup()} sx={RegisterLink}>
                New to ClickShop ? Register Now
              </Typography>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                onChange={(e) => handlechange(e)}
                variant="standard"
                name="firstname"
                label="First Name"
              />
              <TextField
                onChange={(e) => handlechange(e)}
                variant="standard"
                name="lastname"
                label="Last Name"
              />
              {/* <TextField variant="standard" label="Enter Your User Name" /> */}
              <TextField
                onChange={(e) => handlechange(e)}
                variant="standard"
                name="email"
                label="Enter Your Email Address"
              />
              <TextField
                onChange={(e) => handlechange(e)}
                variant="standard"
                name="password"
                label="Enter Your Password"
              />
              <TextField
                onChange={(e) => handlechange(e)}
                variant="standard"
                name="phone"
                label="Enter Your Phone Number"
              />

              <Button style={LoginButton} onClick={() => handleRegisterUser()}>
                Continue
              </Button>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
