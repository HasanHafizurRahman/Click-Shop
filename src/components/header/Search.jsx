import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import React from "react";

const SearchContainer = styled(Box)`
  background-color: white;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
`;

const InputContainer = styled(InputBase)`
  padding-left: 20px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputContainer placeholder="Search for products brands and more..." />
    </SearchContainer>
  );
};

export default Search;
