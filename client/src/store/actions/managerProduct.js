import actionTypes from './actionTypes';

import {
    apiAddProduct,
    apiDeleteProduct,
    apiGetAllProduct,
    apiGetAnProduct,
    apiPutProduct,
    apiGetProductByCategory,
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
