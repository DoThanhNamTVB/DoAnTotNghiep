import axiosConfig from '../axiosConfig';

export const apiRegister = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosConfig({
                method: 'post',
                url: '/api/auth/register',
                data: payload,
            });
            resolve(reponse);
        } catch (error) {
            reject(error);
        }
    });

export const apiLogin = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosConfig({
                method: 'post',
                url: '/api/auth/login',
                data: payload,
            });
            resolve(reponse);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetCurrentUser = () =>
    new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosConfig({
                method: 'get',
                url: '/api/auth/me',
            });
            resolve(reponse);
        } catch (error) {
            reject(error);
        }
    });
