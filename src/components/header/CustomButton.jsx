import styled from "@emotion/styled";
import { ShoppingCart } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginDialog from "../login/LoginDialog";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <Button
        onClick={handleOpen}
        style={{
          color: "#2874f0",
          backgroundColor: "white",
          boxShadow: "none",
          textTransform: "none",
          padding: "5px 40px",
          borderRadius: "2px",
          fontWeight: "bold",
          height: "32px",
        }}
        variant="contained"
      >
        Login
      </Button>
      <Typography style={{ width: 135 }}>Become a seller</Typography>
      <Typography>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
