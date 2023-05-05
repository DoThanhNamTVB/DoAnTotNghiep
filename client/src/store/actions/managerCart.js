import actionTypes from './actionTypes';

import { apiAddCart, apiGetCartByUserId, apiPutCart, apiDeleteCart } from '~/service/managerCart';

export const addCart = (payload, userId) => async (dispatch) => {
    try {
        const response = await apiAddCart(payload, userId);

        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_CART_SUCCESS,
                msg: response.data.msg,
                data: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_CART_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_CART_FAIL,
            msg: null,
        });
    }
};

export const getCartByUserId = (userId) => async (dispatch) => {
    try {
        const response = await apiGetCartByUserId(userId);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CART_SUCCESS,
                carts: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_CART_FAIL,
                carts: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CART_FAIL,
            carts: null,
        });
    }
};

export const putCart = (payload, userId, productId) => async (dispatch) => {
    try {
        const response = await apiPutCart(payload, userId, productId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_CART_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_CART_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_CART_FAIL,
            msg: null,
        });
    }
};

export const deleteCart = (userId, productId) => async (dispatch) => {
    try {
        const response = await apiDeleteCart(userId, productId);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_CART_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_CART_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_CART_FAIL,
            msg: null,
        });
    }
};
