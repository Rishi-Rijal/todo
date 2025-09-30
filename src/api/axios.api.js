import axios from "axios";

const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL,
  withCredentials: true,  
});

export {userApi}
