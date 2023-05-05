import actionTypes from '../actions/actionTypes';

const initState = {
    msgAdd: '',
    msgGet: '',
    msgPut: '',
    msgDelete: '',
    msgGetAll: '',
    productColors: [],
    productColor: {},
    statusAdd: false,
    statusGet: false,
    statusPut: false,
    statusDelete: false,
    statusGetAll: false,
};

const managerProductColorReducer = (state = initState, action) => {
    switch (action.type) {
        //add action
        case actionTypes.ADD_PRODUCT_COLOR_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                statusGet: false,
                statusPut: false,
                statusDelete: false,
                productColor: {},

                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.ADD_PRODUCT_COLOR_FAIL:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusPut: false,
                statusDelete: false,
                productColor: {},

                msgAdd: action.msg,
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };

        //get all action

        case actionTypes.GET_ALL_PRODUCT_COLOR_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: true,
                statusPut: false,
                statusDelete: false,
                productColors: action.productColors,
                productColor: {},

                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.GET_ALL_PRODUCT_COLOR_FAIL:
            return {
                ...state,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msgGetAll: action.productColors,
                productColors: [],
                productColor: {},

                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };
        //get an action
        case actionTypes.GET_AN_PRODUCT_COLOR_SUCCESS:
            return {
                ...state,
                statusGet: true,
                statusAdd: false,
                statusPut: false,
                statusDelete: false,
                productColor: action.productColor,
                productColors: [],

                msgGet: '',
                msgAdd: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.GET_AN_PRODUCT_COLOR_FAIL:
            return {
                ...state,
                statusGet: false,
                statusAdd: false,
                statusPut: false,
                productColor: {},
                statusDelete: false,
                msgGet: action.productColor,
                msgAdd: '',
                msgPut: '',
                msgDelete: '',
            };

        //put action
        case actionTypes.PUT_PRODUCT_COLOR_SUCCESS:
            return {
                ...state,
                statusPut: true,
                statusAdd: false,
                statusGet: false,

                statusDelete: false,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.PUT_PRODUCT_COLOR_FAIL:
            return {
                ...state,
                statusPut: false,
                statusAdd: false,
                statusGet: false,

                statusDelete: false,
                msgPut: action.msg,
                msgAdd: '',
                msgGet: '',
                msgDelete: '',
            };

        //delete action
        case actionTypes.DELETE_PRODUCT_COLOR_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                statusAdd: false,
                statusGet: false,
                statusPut: false,
                msgDelete: '',
                msgAdd: '',
                msgGet: '',
                msgPut: '',
            };
        case actionTypes.DELETE_PRODUCT_COLOR_FAIL:
            return {
                ...state,
                msgDelete: action.msg,
                statusDelete: false,
                statusAdd: false,
                statusGet: false,
                statusPut: false,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
            };
        default:
            return state;
    }
};

export default managerProductColorReducer;
