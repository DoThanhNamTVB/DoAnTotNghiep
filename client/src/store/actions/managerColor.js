import actionTypes from './actionTypes';

import { apiAddColor, apiDeleteColor, apiGetAllColor, apiGetAnColor, apiPutColor } from '~/service/managerColor';

export const addColor = (payload) => async (dispatch) => {
    try {
        const response = await apiAddColor(payload);

        // console.log(response.data.msg);

        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_COLOR_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_COLOR_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_COLOR_FAIL,
            msg: null,
        });
    }
};

export const getAllColor = () => async (dispatch) => {
    try {
        const response = await apiGetAllColor();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_COLOR_SUCCESS,
                colors: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_COLOR_FAIL,
                colors: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_COLOR_FAIL,
            colors: null,
        });
    }
};

export const getAnColor = (id) => async (dispatch) => {
    try {
        const response = await apiGetAnColor(id);
        // console.log('a', response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AN_COLOR_SUCCESS,
                color: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AN_COLOR_FAIL,
                color: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AN_COLOR_FAIL,
            color: null,
        });
    }
};

export const putColor = (payload, id) => async (dispatch) => {
    try {
        const response = await apiPutColor(payload, id);
        // console.log('api', response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_COLOR_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_COLOR_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_COLOR_FAIL,
            msg: null,
        });
    }
};

export const deleteColor = (id) => async (dispatch) => {
    try {
        const response = await apiDeleteColor(id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_COLOR_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_COLOR_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_COLOR_FAIL,
            msg: null,
        });
    }
};
