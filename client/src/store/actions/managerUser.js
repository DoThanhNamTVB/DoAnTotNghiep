import actionTypes from './actionTypes';

import { apiGetAnUser, apiGetAllUser, apiPutUser } from '~/service/managerUser';

export const getAllUser = () => async (dispatch) => {
    try {
        const response = await apiGetAllUser();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_USER_SUCCESS,
                users: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_USER_FAIL,
                users: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_USER_FAIL,
            users: null,
        });
    }
};

export const getAnUser = (id) => async (dispatch) => {
    try {
        const response = await apiGetAnUser(id);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AN_USER_SUCCESS,
                user: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AN_USER_FAIL,
                user: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AN_USER_FAIL,
            user: null,
        });
    }
};

export const putUser = (payload, id) => async (dispatch) => {
    try {
        const response = await apiPutUser(payload, id);
        console.log(response);

        // if (response?.data.err === 0) {
        //     dispatch({
        //         type: actionTypes.PUT_CATEGORY_SUCCESS,
        //         user: response.data.msg,
        //     });
        // } else {
        //     dispatch({
        //         type: actionTypes.PUT_CATEGORY_FAIL,
        //         msg: response.data.msg,
        //     });
        // }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_ADMIN_FAIL,
            data: null,
        });
    }
};
