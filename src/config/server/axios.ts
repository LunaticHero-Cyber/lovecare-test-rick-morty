import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error: AxiosError) {
    console.log(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
