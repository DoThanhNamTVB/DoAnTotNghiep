import axiosConfig from '../axiosConfig';

export const apiAddProductColor = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerProductColor/create',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });
export const apiGetByIdAllProductColor = (idProduct) =>
    new Promise(async (relsove, reject) => {
        try {
            // console.log('abc');
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProductColor/getAll/' + idProduct,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetByIdAnProductColor = (idProduct, idColor) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProductColor/' + idProduct + '/' + idColor,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutProductColor = (payload, idProduct, idColor) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerProductColor/' + idProduct + '/' + idColor,
                data: payload,
            });
            // console.log('abc', response);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteProductColor = (idProduct, idColor) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerProductColor/' + idProduct + '/' + idColor,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
