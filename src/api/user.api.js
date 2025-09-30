import { userApi } from "./axios.api";
import axios from "axios";


const registerUser = async (data) => {
    try {
        const response = await userApi.post("/register", data);
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};

const loginUser = async (data) => {
    const response = await userApi.post("/login", data);
    try {
        return response.data;
    } catch (error) {
        throw error;
    }
}

const logoutUser = async () => {
    const response = await userApi.post("/logout");

    try {
        return response.data
    } catch (error) {
        throw error
    }
}

const userInfo = async () => {
    const response = await userApi.get("/user");
    try{
        return response.data
    }catch(error){
        throw error
    }
}

export { registerUser, loginUser, logoutUser, userInfo }
