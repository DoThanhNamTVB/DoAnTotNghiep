import axiosConfig from '../axiosConfig';

export const apiAddColor = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerColor/create',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllColor = async () => {
    try {
        // console.log('api');
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerColor/get-all',
        });
        // console.log(response);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAnColor = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerColor/' + id,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutColor = async (payload, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerColor/' + id,
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteColor = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/managerColor/' + id,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
