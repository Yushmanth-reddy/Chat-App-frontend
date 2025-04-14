import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-application-backend-eight-liart.vercel.app/api",
  withCredentials: true,
});
