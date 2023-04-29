import React from "react";
import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#FFFFFF",
  width: "17%",
  marginLeft: 10,
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title }) => {
  const adURL =
    "https://hatil.com/sites/default/files/hatil/pressad3.jpeg?fs=1&width=740&height=580&hl=en_US1&iframe=true";
  return (
    <Component>
      <LeftComponent>
        <Slide data={products} title={title} timer={true} multi={true} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: 217 }} alt="advertise" />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
