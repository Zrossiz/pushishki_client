import axios from 'axios';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;
export const axiosInst = axios.create(
    {
        headers: {
            'api-key': API_KEY
        }
    }
);

axiosInst.interceptors.request.use(config => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/, "\$1");
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});