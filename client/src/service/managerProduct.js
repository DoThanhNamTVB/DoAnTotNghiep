import axiosConfig from '../axiosConfig';

export const apiAddProduct = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/managerProduct/create',
                data: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllProduct = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/get-all',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAnProduct = (id) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/' + id,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiPutProduct = (product, id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: '/api/managerProduct/' + id,
                data: product,
            });
            // console.log(response);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteProduct = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: '/api/managerProduct/' + id,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductByCategory = (categorySlug) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/getCategory/' + categorySlug,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductNew = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/get/get-product-new',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductHot = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/get/get-product-hot',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductSearch = (keySearch) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/get/get-product-search/' + keySearch,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductSimilar = (price) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/get/get-product-similar/' + price,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductFilter = (payload) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/get/productFilter',
                params: payload,
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProductLimit = (categorySlug, page) =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/managerProduct/getLimit/get-Limit-Category',
                params: { categorySlug, page },
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });
