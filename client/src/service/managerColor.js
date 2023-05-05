import axiosConfig from '../axiosConfig';

export const apiAddColor = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerColor/create',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllColor = () =>
    new Promise(async (relsove, reject) => {
        try {
            // console.log('api');
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerColor/get-all',
            });
            // console.log(response);
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAnColor = (id) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerColor/' + id,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutColor = (payload, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerColor/' + id,
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteColor = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerColor/' + id,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
