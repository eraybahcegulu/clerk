import Axios from 'axios';
import { API_URL } from '../config';
import storage from '../utils/storage';
import toast from 'react-hot-toast';


function authRequestInterceptor(config: any) {
    const token = storage.getToken();
    if (token && config.headers) {
        config.headers.authorization = `Bearer ${token}`;
        config.headers.Accept = 'application/json';
    }

    return config;
}

export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log(error)
        const message = error.response?.data?.message || error.message;
        if (error.response.status === 400) {
            if (error.response.data.authorization === false) {
                localStorage.clear();
                throw toast.error(message)
            }
            else {
                throw toast.error(message)
            }
        }

        return Promise.reject(error);
    }
);
