import actionTypes from '../actions/actionTypes';

const initState = {
    msg: '',
    carts: [],
    statusAdd: null,
    statusGet: false,
    statusPut: false,
    statusDelete: false,
};

const managerCartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.RESET_CART:
            return {
                ...state,
                statusAdd: null,
                msg: '',
            };
        case actionTypes.ADD_CART_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                statusGet: false,
                statusPut: false,
                statusDelete: false,
                msg: '',
            };
        case actionTypes.ADD_CART_FAIL:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusPut: false,
                statusDelete: false,
                msg: action.msg,
            };

        //action get
        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
                statusAdd: null,
                statusGet: true,
                statusPut: false,
                statusDelete: false,
                carts: action.carts,
                msg: '',
            };
        case actionTypes.GET_CART_FAIL:
            return {
                ...state,
                statusAdd: null,
                statusGet: false,
                statusPut: false,
                statusDelete: false,
                msg: action.carts,
            };

        //action put
        case actionTypes.PUT_CART_SUCCESS:
            return {
                ...state,
                statusPut: true,
                statusAdd: false,
                statusGet: false,
                statusDelete: false,
                msg: '',
            };
        case actionTypes.PUT_CART_FAIL:
            return {
                ...state,
                statusPut: false,
                statusAdd: false,
                statusGet: false,
                statusDelete: false,
                msg: action.msg,
            };

        //action delete
        case actionTypes.DELETE_CART_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                statusAdd: false,
                statusGet: false,
                statusPut: false,
                msg: '',
            };
        case actionTypes.DELETE_CART_FAIL:
            return {
                ...state,
                statusDelete: false,
                statusAdd: false,
                statusGet: false,
                statusPut: false,
                msg: action.msg,
            };
        //default
        default:
            return state;
    }
};

export default managerCartReducer;
