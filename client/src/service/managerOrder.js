import axiosConfig from '../axiosConfig';

export const apiAddOrder = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerOrder/create',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apigetAllOrder = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerOrder/getAll',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetOrderByStatus = (statusOrder) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerOrder/getStatus/' + statusOrder,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetOrderById = (orderId) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerOrder/get/' + orderId,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetOrderByUserId = (userId) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerOrder/get/' + userId,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetOrderByUserStatus = (userId, statusOrder) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerOrder/get/' + userId + '/' + statusOrder,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutOrderStatus = (orderId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerOrder/status/' + orderId,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutUserOrderId = (payload, orderId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerOrder/user/' + orderId,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteOrder = (orderId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerOrder/delete/' + orderId,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
