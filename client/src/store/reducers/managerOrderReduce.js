import actionTypes from '../actions/actionTypes';

const initState = {
    msg: '',
    msgAdd: '',
    order: {},
    orders: [],
    ordersUser: [],
    orderAllStatus: [],
    orderStatus: [],
    dataAdd: {},
    statusAdd: false,
    statusGetAll: false,
    statusPutStatus: false,
    statusGetAllStatus: false,
    statusCancel: false,
    statusGetOrderID: false,
};

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        //add
        case actionTypes.ADD_ORDER_SUCCESS:
            return {
                ...state,
                dataAdd: action.data || [],
                msgAdd: '',
                statusAdd: true,
                statusGetOrderID: false,
                statusPutStatus: false,
            };
        case actionTypes.ADD_ORDER_FAIL:
            return {
                ...state,
                orders: [],
                msgAdd: action.msg,
                statusAdd: false,
                statusGetOrderID: false,
            };
        //get all
        case actionTypes.GET_ALL_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.orders || [],
                msg: '',
                statusAdd: false,
                statusPutStatus: false,
                statusGetAll: true,
                statusGetOrderID: false,
            };
        case actionTypes.GET_ALL_ORDER_FAIL:
            return {
                ...state,
                orders: [],
                msg: action.orders,
                statusGetAll: false,
                statusPutStatus: false,
                statusAdd: false,
                statusGetOrderID: false,
            };

        //get 1
        case actionTypes.GET_ORDER_BY_USERID_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                ordersUser: action.ordersUser || [],
                statusPutStatus: false,
                msg: '',
                statusGetOrderID: false,
            };
        case actionTypes.GET_ORDER_BY_USERID_FAIL:
            return {
                ...state,
                statusAdd: false,
                ordersUser: [],
                statusPutStatus: false,
                statusGetOrderID: false,
                msg: action.orders,
            };

        //get by status
        case actionTypes.GET_ALL_ORDER_BY_STATUS_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                orderAllStatus: action.orders,
                statusPutStatus: false,
                msg: '',
                order: {},
                statusGetAllStatus: true,
                statusCancel: false,
                statusGetOrderID: false,
            };
        case actionTypes.GET_ALL_ORDER_BY_STATUS_FAIL:
            return {
                ...state,
                statusAdd: false,
                statusPutStatus: false,
                orderAllStatus: [],
                statusGetAllStatus: false,
                order: {},
                msg: action.orders,
                statusGetOrderID: false,
            };

        //get by id
        case actionTypes.GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                order: action.orderById,
                statusGetOrderID: true,
                statusAdd: false,
                statusPutStatus: false,
                msg: '',
                statusGetAllStatus: true,
            };
        case actionTypes.GET_ORDER_BY_ID_FAIL:
            return {
                ...state,
                order: {},
                statusGetOrderID: false,
                statusAdd: false,
                statusPutStatus: false,
                statusGetAllStatus: false,
                msg: action.orderById,
            };

        //get2
        case actionTypes.GET_ORDER_BY_STATUS_SUCCESS:
            return {
                ...state,
                orderStatus: action.orderStatus,
                msg: '',
                statusAdd: false,
                statusPutStatus: false,
                statusCancel: false,
                statusGetOrderID: false,
            };
        case actionTypes.GET_ORDER_BY_STATUS_FAIL:
            return {
                ...state,
                orderStatus: [],
                statusAdd: false,
                msg: action.orderStatus,
                statusPutStatus: false,
                statusGetOrderID: false,
            };

        //put1
        case actionTypes.PUT_ORDER_STATUS_BY_ORDERID_SUCCESS:
            return {
                ...state,
                msg: '',
                statusPutStatus: true,
                statusAdd: false,
                statusGetOrderID: false,
            };
        case actionTypes.PUT_ORDER_STATUS_BY_ORDERID_FAIL:
            return {
                ...state,
                msg: action.msg,
                statusPutStatus: false,
                statusAdd: false,
                statusGetOrderID: false,
            };

        //put2
        case actionTypes.PUT_ORDER_ORDERID_SUCCESS:
            return {
                ...state,
                msg: '',
                statusAdd: false,
                statusPutStatus: false,
                statusGetOrderID: false,
            };
        case actionTypes.PUT_ORDER_ORDERID_FAIL:
            return {
                ...state,
                msg: action.msg,
                statusAdd: false,
                statusPutStatus: false,
                statusGetOrderID: false,
            };

        case actionTypes.CANCEL_ORDER_SUCCESS:
            return {
                ...state,
                msg: '',
                statusCancel: true,
                statusAdd: false,
                statusPutStatus: false,
                statusGetOrderID: false,
            };
        case actionTypes.CANCEL_ORDER_FAIL:
            return {
                ...state,
                msg: action.msg,
                statusCancel: false,
                statusAdd: false,
                statusPutStatus: false,
                statusGetOrderID: false,
            };

        default:
            return state;
    }
};

export default orderReducer;
