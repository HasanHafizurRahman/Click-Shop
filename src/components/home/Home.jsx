import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: "10px", background: "#F2F2F2" }}>
        <Banner />
      </Box>
    </>
  );
};

export default Home;
