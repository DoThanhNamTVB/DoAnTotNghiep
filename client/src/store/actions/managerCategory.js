import actionTypes from './actionTypes';

import {
    apiAddCategory,
    apiDeleteCategory,
    apiGetAllCategory,
    apiGetAnCategory,
    apiPutCategory,
} from '~/service/managerCatagory';

export const addCategory = (payload) => async (dispatch) => {
    try {
        const response = await apiAddCategory(payload);

        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_CATEGORY_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_CATEGORY_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_CATEGORY_FAIL,
            msg: null,
        });
    }
};

export const getAllCategory = () => async (dispatch) => {
    try {
        const response = await apiGetAllCategory();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
                categories: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_CATEGORY_FAIL,
                categories: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_CATEGORY_FAIL,
            categories: null,
        });
    }
};

export const getAnCategory = (id) => async (dispatch) => {
    try {
        const response = await apiGetAnCategory(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AN_CATEGORY_SUCCESS,
                category: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AN_CATEGORY_FAIL,
                category: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AN_CATEGORY_FAIL,
            category: null,
        });
    }
};

export const putCategory = (payload, id) => async (dispatch) => {
    try {
        const response = await apiPutCategory(payload, id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_CATEGORY_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_CATEGORY_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_CATEGORY_FAIL,
            msg: null,
        });
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    try {
        const response = await apiDeleteCategory(id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_CATEGORY_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_CATEGORY_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_CATEGORY_FAIL,
            msg: null,
        });
    }
};

export const resetCategory = () => ({
    type: actionTypes.RESET_CATEGORY,
});
