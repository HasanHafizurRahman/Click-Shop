import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constant/data";
import styled from "@emotion/styled";

const Containar = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;

const Component = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-weight: 600;
  font-size: 13px;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <Containar>
      {navData.map((data) => (
        <Component>
          <img src={data.url} alt="imageurl" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Component>
      ))}
    </Containar>
  );
};

export default Navbar;
