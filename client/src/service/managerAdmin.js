import axiosConfig from '../axiosConfig';

export const apiAddAdmin = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/adminAccountRouter/admin/create-account',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllAdmin = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/adminAccountRouter/admin/account',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAnAdmin = (id) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/adminAccountRouter/admin/' + id,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutAdmin = (payload, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/adminAccountRouter/admin/' + id,
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteAdmin = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/adminAccountRouter/admin/' + id,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
