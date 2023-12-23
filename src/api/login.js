// import { Password } from "@mui/icons-material";
import axios from "axios";

export async function login(email, password) {
  try {
    const response = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: email,
      password: password,
    });
    const { jwt } = response.data;
    localStorage.setItem("token", jwt);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response.data.error.message || error.message,
    };
  }
}

export async function register(payload) {
  try {
    console.log("Register:-", payload);
    const response = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      payload
    );
    const { jwt } = response.data;
    localStorage.setItem("token", jwt);
    console.log(`API:-`, response);
    return response.data;
  } catch (error) {
    console.log(`Response Error:-`, error);
    return {
      success: false,
      message: error.response.data.error.message || error.message,
    };
  }
}
