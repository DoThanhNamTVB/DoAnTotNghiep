import actionTypes from '../actions/actionTypes';

const initState = {
    msgAdd: '',
    msgGet: '',
    msgGetAll: '',
    msgPut: '',
    msgDelete: '',
    products: [],
    product: {},
    statusAdd: false,
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
    statusDelete: false,
    statusCategory: false,
    productAdd: {},
    productCategory: [],
    msgNew: '',
    productNew: [],
    msgHot: '',
    productHot: [],
};

const managerProductReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                productAdd: action.data,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.ADD_PRODUCT_FAIL:
            return {
                ...state,
                statusAdd: false,
                msgAdd: action.msg,
                productAdd: {},
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: true,
                statusPut: false,
                statusDelete: false,
                products: action.products,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
                productAdd: {},
            };
        case actionTypes.GET_ALL_PRODUCT_FAIL:
            return {
                ...state,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msgGetAll: action.products,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
                productAdd: {},
                statusCategory: false,
                productCategory: [],
            };

        case actionTypes.GET_AN_PRODUCT_SUCCESS:
            return {
                ...state,
                statusGet: true,
                product: action.product,
                msgGet: '',
                msgAdd: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
                productAdd: {},
                statusCategory: false,
                productCategory: [],
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                statusAdd: false,
            };
        case actionTypes.GET_AN_PRODUCT_FAIL:
            return {
                ...state,
                statusGet: false,
                msgGet: action.product,
                msgAdd: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
                statusCategory: false,
                productCategory: [],
            };
        case actionTypes.PUT_PRODUCT_SUCCESS:
            return {
                ...state,
                statusPut: true,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgGetAll: '',
                msgDelete: '',
                productAdd: {},
            };
        case actionTypes.PUT_PRODUCT_FAIL:
            return {
                ...state,
                statusPut: false,
                msgPut: action.msg,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgDelete: '',
                productAdd: {},
                statusCategory: false,
                productCategory: [],
            };
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                msgDelete: action.msg,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                productAdd: {},
                statusCategory: false,
                productCategory: [],
            };
        case actionTypes.DELETE_PRODUCT_FAIL:
            return {
                ...state,
                msgDelete: action.msg,
                statusDelete: false,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                productAdd: {},
                statusCategory: false,
                productCategory: [],
            };

        case actionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                products: action.products,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
                productAdd: {},
                statusCategory: true,
                productCategory: action.productCategory,
            };
        case actionTypes.GET_PRODUCT_BY_CATEGORY_FAIL:
            return {
                ...state,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msgGetAll: action.products,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
                productAdd: {},
                statusCategory: false,
                productCategory: [],
            };

        case actionTypes.GET_PRODUCT_NEW_SUCCESS:
            return {
                ...state,
                msgNew: '',
                productNew: action.products,
            };
        case actionTypes.GET_PRODUCT_NEW_FAIL:
            return {
                ...state,
                msgNew: action.products,
                productNew: [],
            };
        case actionTypes.GET_PRODUCT_HOT_SUCCESS:
            return {
                ...state,
                msgHot: '',
                productHot: action.products,
            };
        case actionTypes.GET_PRODUCT_HOT_FAIL:
            return {
                ...state,
                msgHot: '',
                productHot: action.products,
            };
        default:
            return state;
    }
};

export default managerProductReducer;
