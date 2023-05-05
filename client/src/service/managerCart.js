import axiosConfig from '../axiosConfig';

export const apiAddCart = (payload, userId) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerCart/create/' + userId,
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetCartByUserId = (userId) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerCart/getCart/' + userId,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutCart = (payload, userId, productId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerCart/' + userId + '/' + productId,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteCart = (userId, productId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerCart/' + userId + '/' + productId,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
