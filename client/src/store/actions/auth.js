import actionTypes from './actionTypes';
import {
    apiRegister,
    apiLogin,
    apiGetCurrentUser,
    apiPutPasswordUser,
    apiLoginAdmin,
    apiGetCurrentAdmin,
} from '~/service/auth';

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload);
        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token,
            });
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: null,
        });
    }
};

export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload);
        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token,
            });
        } else {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null,
        });
    }
};

export const loginAdmin = (payload) => async (dispatch) => {
    try {
        const response = await apiLoginAdmin(payload);
        // console.log(response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_ADMIN_SUCCESS,
                data: response.data.token,
                role: response.data.role,
            });
        } else {
            dispatch({
                type: actionTypes.LOGIN_ADMIN_FAIL,
                data: response.data.msg,
                role: response.data.role,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_ADMIN_FAIL,
            data: null,
            response: null,
        });
    }
};

export const getCurrentUser = () => async (dispatch) => {
    try {
        const response = await apiGetCurrentUser();

        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT_USER_SUCCESS,
                data: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_CURRENT_USER_FAIL,
                data: response.data.msg,
            });
            dispatch({
                type: actionTypes.LOGOUT,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT_USER_FAIL,
            data: null,
        });
        dispatch({
            type: actionTypes.LOGOUT,
        });
    }
};

export const getCurrentAdmin = () => async (dispatch) => {
    try {
        const response = await apiGetCurrentAdmin();

        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT_ADMIN_SUCCESS,
                data: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_CURRENT_ADMIN_FAIL,
                data: response.data.msg,
            });
            // dispatch({
            //     type: actionTypes.LOGOUT,
            // });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT_ADMIN_FAIL,
            data: null,
        });
        // dispatch({
        //     type: actionTypes.LOGOUT,
        // });
    }
};

export const putPasswordUser = (payload, id) => async (dispatch) => {
    try {
        const response = await apiPutPasswordUser(payload, id);
        // console.log(response);

        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.UPDATE_PASSWORD_SUCCESS,
                data: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.UPDATE_PASSWORD_FAIL,
                data: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_PASSWORD_FAIL,
            data: null,
        });
    }
};

export const logout = () => ({
    type: actionTypes.LOGOUT,
});

export const reset = () => ({
    type: actionTypes.RESET,
});

export const resetMsg = () => ({
    type: actionTypes.RESET_MSG,
});
