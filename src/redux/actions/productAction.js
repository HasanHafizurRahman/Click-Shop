import axios from "axios";

const URL = "http://localhost:8000";

export const getProductsReducer = () => {
  try {
    let response = axios.get(`${URL}/products`);
    console.log(response);
  } catch (error) {
    console.log("Error while calling getProduct api", error.message);
  }
};
