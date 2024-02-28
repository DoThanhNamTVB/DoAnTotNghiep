import axiosConfig from '../axiosConfig';

export const apiGetSetting = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/setting/get/' + id,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllSetting = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/setting/getAll',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutSetting = async (payload, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/setting/put/' + id,
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
