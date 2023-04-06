import styled from "@emotion/styled";
import { ShoppingCart } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

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
  return (
    <Wrapper>
      <Button
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
    </Wrapper>
  );
};

export default CustomButton;
