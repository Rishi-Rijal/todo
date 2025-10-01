import axios from "axios";

const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL,
  withCredentials: true,  
});

const todoApi = axios.create({
  baseURL: import.meta.env.VITE_TODO_API_URL,
  withCredentials: true
})

const subtodoApi = axios.create({
  baseURL: import.meta.env.VITE_SUBTODO_API_URL,
  withCredentials: true
})

export {userApi, todoApi, subtodoApi}
