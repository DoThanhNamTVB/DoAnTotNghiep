import axiosConfig from '../axiosConfig';

export const apiGetAnUser = (id) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerUser/' + id,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllUser = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerUser/getAllUser',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutInfoUser = (payload, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerUser/info-user/' + id,
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutUser = (status, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerUser/' + id,
                data: status,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
