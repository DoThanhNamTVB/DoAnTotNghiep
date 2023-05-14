import axiosConfig from '../axiosConfig';

export const apiGetSetting = (id) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/setting/get/' + id,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllSetting = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/setting/getAll',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutSetting = (payload, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/setting/put/' + id,
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
