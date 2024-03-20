import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function enquire(payload) {
    try {
        let res = axiosInstance.post("/enquiries", payload);
        // console.log(`Enquiry Resp:-`, res);
        return {
            success: true,
            message: "Your enquiry is saved",
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: `Sorry your enquiry cannot be placed due to ${error.message}`
        }
    }
}