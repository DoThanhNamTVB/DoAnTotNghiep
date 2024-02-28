import axiosConfig from '../axiosConfig';

export const apiAddProduct = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerProduct/create',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllProduct = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/get-all',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAnProduct = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/' + id,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutProduct = async (product, id) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/managerProduct/' + id,
            data: product,
        });
        // console.log(response);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteProduct = async (id) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/managerProduct/' + id,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductByCategory = async (categorySlug) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/getCategory/' + categorySlug,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductNew = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/get/get-product-new',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductHot = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/get/get-product-hot',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductSearch = async (keySearch) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/get/get-product-search/' + keySearch,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductSimilar = async (price) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/get/get-product-similar/' + price,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductFilter = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/get/productFilter',
            params: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetProductLimit = async (categorySlug, page) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProduct/getLimit/get-Limit-Category',
            params: { categorySlug, page },
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
