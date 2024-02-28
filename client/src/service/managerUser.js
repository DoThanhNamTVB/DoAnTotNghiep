import axiosConfig from '../axiosConfig';

export const apiGetAnUser = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerUser/' + id,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllUser = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerUser/getAllUser',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutInfoUser = async (payload, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerUser/info-user/' + id,
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutUser = async (status, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerUser/' + id,
            data: status,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
