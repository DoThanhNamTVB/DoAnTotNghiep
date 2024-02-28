import axiosConfig from '../axiosConfig';

export const apiAddProductColor = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerProductColor/create',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetByIdAllProductColor = async (idProduct) => {
    try {
        // console.log('abc');
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProductColor/getAll/' + idProduct,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetByIdAnProductColor = async (idProduct, idColor) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProductColor/' + idProduct + '/' + idColor,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutProductColor = async (payload, idProduct, idColor) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerProductColor/' + idProduct + '/' + idColor,
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteProductColor = async (idProduct, idColor) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/managerProductColor/' + idProduct + '/' + idColor,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
