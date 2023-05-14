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
                statusPutStatus: false,
            };
        case actionTypes.ADD_ORDER_FAIL:
            return {
                ...state,
                orders: [],
                msgAdd: action.msg,
                statusAdd: false,
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
            };
        case actionTypes.GET_ALL_ORDER_FAIL:
            return {
                ...state,
                orders: [],
                msg: action.orders,
                statusGetAll: false,
                statusPutStatus: false,
                statusAdd: false,
            };

        //get 1
        case actionTypes.GET_ORDER_BY_USERID_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                ordersUser: action.ordersUser || [],
                statusPutStatus: false,
                msg: '',
            };
        case actionTypes.GET_ORDER_BY_USERID_FAIL:
            return {
                ...state,
                statusAdd: false,
                ordersUser: [],
                statusPutStatus: false,
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
            };

        //get by id
        case actionTypes.GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                order: action.orderById,
                statusAdd: false,
                statusPutStatus: false,
                msg: '',
                statusGetAllStatus: true,
            };
        case actionTypes.GET_ORDER_BY_ID_FAIL:
            return {
                ...state,
                order: {},
                statusAdd: false,
                statusPutStatus: false,
                statusGetAllStatus: false,
                msg: action.orderById,
            };

        //get2
        case actionTypes.GET_ORDER_BY_STATUS_SUCCESS:
            return {
                ...state,
                orderStatus: action.orderStatus || [],
                msg: '',
                statusAdd: false,
                statusPutStatus: false,
            };
        case actionTypes.GET_ORDER_BY_STATUS_FAIL:
            return {
                ...state,
                orderStatus: [],
                statusAdd: false,
                msg: action.orderStatus,
                statusPutStatus: false,
            };

        //put1
        case actionTypes.PUT_ORDER_STATUS_BY_ORDERID_SUCCESS:
            return {
                ...state,
                msg: '',
                statusAdd: false,
                statusPutStatus: true,
            };
        case actionTypes.PUT_ORDER_STATUS_BY_ORDERID_FAIL:
            return {
                ...state,
                msg: action.msg,
                statusAdd: false,
                statusPutStatus: false,
            };

        //put2
        case actionTypes.PUT_ORDER_ORDERID_SUCCESS:
            return {
                ...state,
                msg: '',
                statusAdd: false,
                statusPutStatus: false,
            };
        case actionTypes.PUT_ORDER_ORDERID_FAIL:
            return {
                ...state,
                msg: action.msg,
                statusAdd: false,
                statusPutStatus: false,
            };

        case actionTypes.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                msg: '',
                statusAdd: false,
                statusPutStatus: false,
            };
        case actionTypes.DELETE_ORDER_FAIL:
            return {
                ...state,
                msg: action.msg,
                statusAdd: false,
                statusPutStatus: false,
            };

        default:
            return state;
    }
};

export default orderReducer;
