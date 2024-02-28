import axiosConfig from '../axiosConfig';

export const apiAddOrder = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerOrder/create',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apigetAllOrder = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerOrder/getAll',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetOrderByStatus = async (statusOrder) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerOrder/getStatus/' + statusOrder,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetOrderById = async (orderId) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerOrder/get/' + orderId,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetOrderByUserId = async (userId) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerOrder/get/' + userId,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetOrderByUserStatus = async (userId, statusOrder) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerOrder/get/' + userId + '/' + statusOrder,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutOrderStatus = async (payload, orderId) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerOrder/status/' + orderId,
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutUserOrderId = async (payload, orderId) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerOrder/user/' + orderId,
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiCancelOrder = async (payload, orderId) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerOrder/cancel/' + orderId,
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
