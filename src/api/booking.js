import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function booking(payload) {
    try {
        let res = await axiosInstance.post("/bookings", payload);
        return {
            success: true,
            data: res.data.data,
            message: "Your booking is saved",
        }
    } catch (error) {
        console.dir(error, {depth:5});
        return {
            success: false,
            message: `Sorry your booking cannot be placed due to ${error.message}`
        }
    }
}

export async function getUserBookings(id) {
    try {
        let res = await axiosInstance.get(`/bookings/user/${id}`);
        return {
            success: true,
            data: res.data.data,
        }
    } catch (error) {
        return {
            success: false,
            message: `Request failed due to ${error.message}`
        } 
    }
}