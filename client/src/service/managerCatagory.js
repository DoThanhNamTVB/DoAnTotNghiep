import axiosConfig from '../axiosConfig';

export const apiAddCategory = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerCatagory/create',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllCategory = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerCatagory/get-all',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAnCategory = (id) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerCatagory/' + id,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutCategory = (payload, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerCatagory/' + id,
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteCategory = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerCatagory/' + id,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
