import actionTypes from './actionTypes';

import {
    apiAddProduct,
    apiDeleteProduct,
    apiGetAllProduct,
    apiGetAnProduct,
    apiPutProduct,
    apiGetProductByCategory,
    apiGetProductNew,
    apiGetProductHot,
    apiGetProductSearch,
    apiGetProductSimilar,
    apiGetProductFilter,
    apiGetProductLimit,
} from '~/service/managerProduct';

export const addProduct = (payload) => async (dispatch) => {
    try {
        const response = await apiAddProduct(payload);

        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_PRODUCT_SUCCESS,
                msg: response.data.msg,
                data: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_PRODUCT_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_PRODUCT_FAIL,
            msg: null,
        });
    }
};

export const getAllProduct = () => async (dispatch) => {
    try {
        const response = await apiGetAllProduct();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
                products: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_PRODUCT_FAIL,
                products: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_PRODUCT_FAIL,
            products: null,
        });
    }
};

export const getAnProduct = (id) => async (dispatch) => {
    try {
        const response = await apiGetAnProduct(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AN_PRODUCT_SUCCESS,
                product: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AN_PRODUCT_FAIL,
                product: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AN_PRODUCT_FAIL,
            product: null,
        });
    }
};

export const putProduct = (product, id) => async (dispatch) => {
    try {
        const response = await apiPutProduct(product, id);
        // console.log(response.data.msg);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_PRODUCT_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_PRODUCT_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_PRODUCT_FAIL,
            msg: null,
        });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const response = await apiDeleteProduct(id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_PRODUCT_FAIL,
            msg: null,
        });
    }
};

export const getProductByCategory = (categorySlug) => async (dispatch) => {
    try {
        const response = await apiGetProductByCategory(categorySlug);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS,
                productCategory: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_BY_CATEGORY_FAIL,
                productCategory: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_BY_CATEGORY_FAIL,
            productCategory: null,
        });
    }
};

export const getProductLimit = (categorySlug, page) => async (dispatch) => {
    try {
        const response = await apiGetProductLimit(categorySlug, page);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_LIMIT_SUCCESS,
                productLimits: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_LIMIT_FAIL,
                productLimits: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_LIMIT_FAIL,
            productLimits: null,
        });
    }
};

export const getProductNew = () => async (dispatch) => {
    try {
        const response = await apiGetProductNew();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_NEW_SUCCESS,
                products: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_NEW_FAIL,
                products: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_NEW_FAIL,
            products: null,
        });
    }
};

export const getProductHot = () => async (dispatch) => {
    try {
        const response = await apiGetProductHot();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_HOT_SUCCESS,
                products: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_HOT_FAIL,
                products: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_HOT_FAIL,
            products: null,
        });
    }
};

export const getProductSearch = (keySearch) => async (dispatch) => {
    try {
        const response = await apiGetProductSearch(keySearch);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_SEARCH_SUCCESS,
                productSearchs: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_SEARCH_FAIL,
                productSearchs: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_SEARCH_FAIL,
            products: null,
        });
    }
};

export const getProductSimilar = (price) => async (dispatch) => {
    try {
        const response = await apiGetProductSimilar(price);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_SIMILAR_SUCCESS,
                productSimilars: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_SIMILAR_FAIL,
                productSimilars: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_SIMILAR_FAIL,
            productSimilars: null,
        });
    }
};

export const getProductFilter = (payload) => async (dispatch) => {
    try {
        const response = await apiGetProductFilter(payload);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRODUCT_FILTER_SUCCESS,
                productFilters: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_FILTER_FAIL,
                productFilters: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_FILTER_FAIL,
            productFilters: null,
        });
    }
};

export const resetProduct = () => ({
    type: actionTypes.RESET_PRODUCT,
});
