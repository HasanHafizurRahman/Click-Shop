import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, error } = getProducts;

  console.log(products);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
