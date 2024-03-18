import axios from 'axios';
import cookie from 'cookie';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;
export const axiosInst = axios.create({
  headers: {
    'api-key': API_KEY
  }
});

axiosInst.interceptors.request.use(
  (config) => {
    const cookies = cookie.parse(document.cookie);
    const token = cookies.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
