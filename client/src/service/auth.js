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

export const apiLoginAdmin = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosConfig({
                method: 'post',
                url: '/api/auth/loginAdmin',
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

export const apiGetCurrentAdmin = () =>
    new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosConfig({
                method: 'get',
                url: '/api/auth/admin',
            });
            resolve(reponse);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutPasswordUser = (payload, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosConfig({
                method: 'put',
                url: '/api/auth/updatePassword/' + id,
                data: payload,
            });
            resolve(reponse);
        } catch (error) {
            reject(error);
        }
    });
