import actionTypes from './actionTypes';

import {
    apiAddProductFavourite,
    apiDeleteProductFavourite,
    apiGetAllProductFavourite,
} from '~/service/managerProductFavourite';

export const addProductFavourite = (payload) => async (dispatch) => {
    try {
        const response = await apiAddProductFavourite(payload);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_PRODUCT_FAVOURITE_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_PRODUCT_FAVOURITE_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_PRODUCT_FAVOURITE_FAIL,
            msg: null,
        });
    }
};

export const getAllProductFavourite = (userId) => async (dispatch) => {
    try {
        const response = await apiGetAllProductFavourite(userId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_PRODUCT_FAVOURITE_SUCCESS,
                productFavourites: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_PRODUCT_FAVOURITE_FAIL,
                productFavourites: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_PRODUCT_FAVOURITE_FAIL,
            productFavourites: null,
        });
    }
};

export const deleteProductFavourite = (payload) => async (dispatch) => {
    try {
        const response = await apiDeleteProductFavourite(payload);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_FAVOURITE_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_FAVOURITE_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_PRODUCT_FAVOURITE_FAIL,
            msg: null,
        });
    }
};
