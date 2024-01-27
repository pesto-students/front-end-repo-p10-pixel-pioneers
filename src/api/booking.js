import axios from "axios";
import axiosInstance from "./axiosInstance";

export default async function booking(payload) {
    // TODO Add the following fields to payload
    payload.bookedOn = new Date().toISOString()
    payload.userID="2";
    payload.propertyID="8";
    payload.amount= Number(payload.totalSeats) * 30000
    console.log(`Payload`, payload)
    try {
        let res = axiosInstance.post("/bookings", payload);
        return {
            success: true,
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