import actionTypes from './actionTypes';

import {
    apiAddOrder,
    apigetAllOrder,
    apiGetOrderByStatus,
    apiGetOrderById,
    apiGetOrderByUserId,
    apiGetOrderByUserStatus,
    apiPutOrderStatus,
    apiPutUserOrderId,
    apiDeleteOrder,
} from '~/service/managerOrder';

export const addOrder = (payload) => async (dispatch) => {
    try {
        // console.log(payload);
        const response = await apiAddOrder(payload);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.ADD_ORDER_SUCCESS,
                data: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.ADD_ORDER_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_ORDER_FAIL,
            msg: null,
        });
    }
};

export const getAllOrder = () => async (dispatch) => {
    try {
        const response = await apigetAllOrder();
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_ORDER_SUCCESS,
                orders: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_ORDER_FAIL,
                orders: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_ORDER_FAIL,
            orders: null,
        });
    }
};

export const getOrderByUserId = (userId) => async (dispatch) => {
    try {
        const response = await apiGetOrderByUserId(userId);
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ORDER_BY_USERID_SUCCESS,
                ordersUser: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ORDER_BY_USERID_FAIL,
                ordersUser: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ORDER_BY_USERID_FAIL,
            ordersUser: null,
        });
    }
};

export const getOrderByStatus = (statusOrder) => async (dispatch) => {
    try {
        const response = await apiGetOrderByStatus(statusOrder);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_ORDER_BY_STATUS_SUCCESS,
                orders: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ALL_ORDER_BY_STATUS_FAIL,
                orders: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_ORDER_BY_STATUS_FAIL,
            orders: null,
        });
    }
};

export const getOrderById = (orderId) => async (dispatch) => {
    try {
        const response = await apiGetOrderById(orderId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
                orderById: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ORDER_BY_ID_FAIL,
                orderById: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ORDER_BY_ID_FAIL,
            orderById: null,
        });
    }
};

export const getOrderByUserStatus = (userId, orderId) => async (dispatch) => {
    try {
        const response = await apiGetOrderByUserStatus(userId, orderId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ORDER_BY_STATUS_SUCCESS,
                orderStatus: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_ORDER_BY_STATUS_FAIL,
                orderStatus: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ORDER_BY_STATUS_FAIL,
            orderStatus: null,
        });
    }
};

export const putOrderStatus = (orderId) => async (dispatch) => {
    try {
        const response = await apiPutOrderStatus(orderId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_ORDER_STATUS_BY_ORDERID_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_ORDER_STATUS_BY_ORDERID_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_ORDER_STATUS_BY_ORDERID_FAIL,
            msg: null,
        });
    }
};

export const putUserOrderId = (payload, orderId) => async (dispatch) => {
    try {
        const response = await apiPutUserOrderId(payload, orderId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.PUT_ORDER_ORDERID_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.PUT_ORDER_ORDERID_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_ORDER_ORDERID_FAIL,
            msg: null,
        });
    }
};

export const deleteOrder = (orderId) => async (dispatch) => {
    try {
        const response = await apiDeleteOrder(orderId);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.DELETE_ORDER_SUCCESS,
                msg: response.data.msg,
            });
        } else {
            dispatch({
                type: actionTypes.DELETE_ORDER_FAIL,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_ORDER_FAIL,
            msg: null,
        });
    }
};
