import { Grid, styled } from "@mui/material";
import React from "react";
import { imageUrl } from "../../constant/data";

const Image = styled("img")(({ theme }) => ({
  display: "flex",
  marginTop: 20,
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

const MidSection = () => {
  return (
    <>
      <Grid
        style={{ marginTop: "10px" }}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        container
      >
        {imageUrl.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img
              src={image}
              alt="url"
              style={{ width: "100%", height: "250px" }}
            />
          </Grid>
        ))}
      </Grid>
      <a href="https://www.nyc.gov/site/doh/covid/covid-19-rapid-testing.page">
        <Image
          src="https://www1.nyc.gov/assets/doh/images/content/banners/covid-19-rapid-testing-banner.jpg"
          alt=""
        />
      </a>
    </>
  );
};

export default MidSection;
