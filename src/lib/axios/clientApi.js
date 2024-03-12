import axios from "axios";

export const clientApi = axios.create({
  baseURL: "http://localhost:8000",
  // baseURL: 'http://localhost:5000',
  timeout: 10000,
});

clientApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

clientApi.interceptors.response.use(
  async function (res) {
    return res.data;
  },
  async function (error) {}
);
