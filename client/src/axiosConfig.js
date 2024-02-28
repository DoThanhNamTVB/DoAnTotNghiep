import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        let token =
            localStorage.getItem('persist:auth') &&
            JSON.parse(localStorage.getItem('persist:auth'))?.token?.slice(1, -1);
        config.headers = {
            authorization: token ? `Bearer ${token}` : null,
        };
        return config;
    },
    function (error) {
        // Do something with request error
        // console.log(error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;
