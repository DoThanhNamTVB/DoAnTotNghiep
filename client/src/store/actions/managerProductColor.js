import actionTypes from './actionTypes';

import {
    apiAddProductColor,
    apiDeleteProductColor,
    apiGetByIdAllProductColor,
    apiGetByIdAnProductColor,
    apiPutProductColor,
} from '~/service/managerProductColor';

export const addProductColor = (payload) => async (dispatch) => {
    try {
        const response = await apiAddProductColor(payload);

        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_PRODUCT_COLOR_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_PRODUCT_COLOR_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_PRODUCT_COLOR_FAIL,
            msg: null,
        });
    }
};

export const getByIdAllProductColor = (idProduct) => async (dispatch) => {
    try {
        const response = await apiGetByIdAllProductColor(idProduct);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_PRODUCT_COLOR_SUCCESS,
                productColors: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_PRODUCT_COLOR_FAIL,
                productColors: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_PRODUCT_COLOR_FAIL,
            productColors: null,
        });
    }
};

export const getByIdAnProductColor = (idProduct, idColor) => async (dispatch) => {
    try {
        const response = await apiGetByIdAnProductColor(idProduct, idColor);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AN_PRODUCT_COLOR_SUCCESS,
                productColor: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AN_PRODUCT_COLOR_FAIL,
                productColor: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AN_PRODUCT_COLOR_FAIL,
            productColor: null,
        });
    }
};

export const putProductColor = (payload, idProduct, idColor) => async (dispatch) => {
    try {
        const response = await apiPutProductColor(payload, idProduct, idColor);
        // console.log('action', response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_PRODUCT_COLOR_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_PRODUCT_COLOR_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_PRODUCT_COLOR_FAIL,
            msg: null,
        });
    }
};

export const deleteProductColor = (idProduct, idColor) => async (dispatch) => {
    try {
        const response = await apiDeleteProductColor(idProduct, idColor);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_COLOR_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_COLOR_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_PRODUCT_COLOR_FAIL,
            msg: null,
        });
    }
};
