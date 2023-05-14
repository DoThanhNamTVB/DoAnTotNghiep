import actionTypes from './actionTypes';

import { apiGetSetting, apiPutSetting, apiGetAllSetting } from '~/service/setting';

export const getSetting = (id) => async (dispatch) => {
    try {
        const response = await apiGetSetting(id);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_SETTING_SUCCESS,
                response: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_SETTING_FAIL,
                response: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_SETTING_FAIL,
            response: null,
        });
    }
};

export const getAllSetting = () => async (dispatch) => {
    try {
        const response = await apiGetAllSetting();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_SETTING_SUCCESS,
                response: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_SETTING_FAIL,
                response: response.data.response,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_SETTING_FAIL,
            response: null,
        });
    }
};

export const putSetting = (payload, id) => async (dispatch) => {
    try {
        const response = await apiPutSetting(payload, id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_SETTING_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_SETTING_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_SETTING_FAIL,
            data: null,
        });
    }
};
