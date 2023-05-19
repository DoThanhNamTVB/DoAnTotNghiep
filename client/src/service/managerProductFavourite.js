import axiosConfig from '../axiosConfig';

export const apiAddProductFavourite = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerProductFavourite/create',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllProductFavourite = (userId) =>
    new Promise(async (relsove, reject) => {
        try {
            // console.log('api');
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProductFavourite/getAll/' + userId,
            });
            // console.log(response);
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteProductFavourite = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerProductFavourite/delete',
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
