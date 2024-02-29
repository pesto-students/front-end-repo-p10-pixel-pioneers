import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function login({email, password}) {
  console.log(`Login:-`, {email, password})
  try {
    const response = await axiosInstance.post("/auth/local", {
      identifier: email,
      password: password,
    });
    const { jwt, user } = response.data;
    localStorage.setItem("token", jwt);
    localStorage.setItem("user", JSON.stringify(user));
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data.error.message || error.message,
    };
  }
}

export async function register(payload) {
  try {
    console.log("Register:-", payload);
    const response = await axiosInstance.post(
      "/auth/local/register",
      payload
    );
    const { jwt, user } = response.data;
    localStorage.setItem("token", jwt);
    localStorage.setItem("user", JSON.stringify(user));
  
    return {
      success: true,
      data:response.data.data
    };
  } catch (error) {
    console.log(`Response Error:-`, error);
    return {
      success: false,
      message: error.response.data.error.message || error.message,
    };
  }
}
