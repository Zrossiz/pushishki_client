import axios from 'axios';

const axiosInst = axios.create();

axiosInst.interceptors.request.use(config => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/, "\$1");
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});