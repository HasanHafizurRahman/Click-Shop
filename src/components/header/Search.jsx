import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background-color: white;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputContainer = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;
const IconWrapper = styled(Box)`
  color: blue;
  margin-top: 5px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputContainer placeholder="Search for products brands and more..." />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default Search;
