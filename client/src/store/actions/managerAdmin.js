import actionTypes from './actionTypes';

import { apiGetAllAdmin, apiGetAnAdmin, apiAddAdmin, apiPutAdmin, apiDeleteAdmin } from '~/service/managerAdmin';

export const addAdmin = (payload) => async (dispatch) => {
    try {
        const response = await apiAddAdmin(payload);

        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_ADMIN_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_ADMIN_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_ADMIN_FAIL,
            data: null,
        });
    }
};

export const getAllAdmin = () => async (dispatch) => {
    try {
        const response = await apiGetAllAdmin();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_ADMIN_SUCCESS,
                admins: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_ADMIN_FAIL,
                admins: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_ADMIN_FAIL,
            admins: null,
        });
    }
};

export const getAnAdmin = (id) => async (dispatch) => {
    try {
        const response = await apiGetAnAdmin(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AN_ADMIN_SUCCESS,
                admin: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AN_ADMIN_FAIL,
                admin: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AN_ADMIN_FAIL,
            admin: null,
        });
    }
};

export const putAdmin = (payload, id) => async (dispatch) => {
    try {
        const response = await apiPutAdmin(payload, id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_ADMIN_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_ADMIN_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_ADMIN_FAIL,
            msg: null,
        });
    }
};

export const deleteAdmin = (id) => async (dispatch) => {
    try {
        const response = await apiDeleteAdmin(id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_ADMIN_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_ADMIN_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_ADMIN_FAIL,
            msg: null,
        });
    }
};
