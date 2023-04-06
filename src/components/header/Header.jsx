import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
`;
const CustomButtonWrapper = styled(Box)`
  margin-left: 5%;
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <Component>
            <Typography
              sx={{
                fontFamily: "MV Boli",
                fontWeight: "bold",
                fontSize: 21,
              }}
            >
              ClickShop
            </Typography>
          </Component>

          <Search />
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
