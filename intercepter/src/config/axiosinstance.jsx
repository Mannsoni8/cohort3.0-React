import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  },
);
