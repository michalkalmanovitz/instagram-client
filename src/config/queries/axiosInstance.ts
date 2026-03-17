import axios, { AxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_SERVER_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL,
  withCredentials: true,
};

export const axiosInstance = axios.create(axiosConfig);
