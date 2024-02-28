import axiosConfig from '../axiosConfig';

export const apiAddAdmin = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/adminAccountRouter/admin/create-account',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllAdmin = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/adminAccountRouter/admin/account',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAnAdmin = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/adminAccountRouter/admin/' + id,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutAdmin = async (payload, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/adminAccountRouter/admin/' + id,
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteAdmin = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/adminAccountRouter/admin/' + id,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
