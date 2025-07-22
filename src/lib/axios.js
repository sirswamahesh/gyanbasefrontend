import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gyanbase.onrender.com/api",
  withCredentials: true,
});
