import axiosConfig from '../axiosConfig';

export const apiAddCategory = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerCatagory/create',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllCategory = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerCatagory/get-all',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAnCategory = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerCatagory/' + id,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutCategory = async (payload, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerCatagory/' + id,
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteCategory = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/managerCatagory/' + id,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
