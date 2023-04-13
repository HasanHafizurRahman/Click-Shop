import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateUser = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling authenticateUser", error.message);
  }
};
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error.message);
  }
};
