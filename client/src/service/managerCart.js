import axiosConfig from '../axiosConfig';

export const apiAddCart = async (payload, userId) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerCart/create/' + userId,
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetCartByUserId = async (userId) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerCart/getCart/' + userId,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutCart = async (payload, userId, productId) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerCart/' + userId + '/' + productId,
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteCart = async (userId, productId) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/managerCart/' + userId + '/' + productId,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
