import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import logo from "../../images/clickshop_generated-removebg-preview.png";
import Search from "./Search";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar>
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
          {/* </Box> */}
          <Search />
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
