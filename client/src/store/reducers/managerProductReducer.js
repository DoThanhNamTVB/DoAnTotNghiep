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
    statusPut: null,
    statusDelete: null,
    statusCategory: false,
    productAdd: {},
    productCategory: null,
    msgNew: '',
    productNew: [],
    msgHot: '',
    productHot: [],
    productSearchs: [],
    msgSearch: '',
    productSimilars: [],
    msgSimilar: '',
    productFilters: [],
    statusFilter: null,
    msgFilter: null,
};

const managerProductReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.RESET_PRODUCT:
            return {
                ...state,
                statusAdd: null,
                productCategory: null,
                statusDelete: null,
            };

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
                statusAdd: null,
                statusGet: false,
                statusGetAll: true,
                statusPut: null,
                statusDelete: null,
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
                statusDelete: null,
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
                statusPut: null,
                statusDelete: null,
                statusAdd: false,
                // productSimilars: [],
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
                product: {},
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
                // productAdd: {},
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
                // productAdd: {},
                // statusCategory: false,
                // productCategory: [],
            };
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                msgDelete: '',
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                // productAdd: {},
                // statusCategory: false,
                // productCategory: [],
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
                // productAdd: {},
                // statusCategory: false,
                // productCategory: [],
            };

        case actionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusPut: null,
                statusDelete: null,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
                productAdd: {},
                statusCategory: true,
                productCategory: action.productCategory,
                product: {},
            };
        case actionTypes.GET_PRODUCT_BY_CATEGORY_FAIL:
            return {
                ...state,
                statusGet: false,
                statusGetAll: false,
                statusPut: null,
                statusDelete: null,
                msgGetAll: action.productCategory,
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

        case actionTypes.GET_PRODUCT_SEARCH_SUCCESS:
            return {
                ...state,
                msgSearch: '',
                productSearchs: action.productSearchs,
            };
        case actionTypes.GET_PRODUCT_SEARCH_FAIL:
            return {
                ...state,
                msgSearch: action.productSearchs,
            };

        case actionTypes.GET_PRODUCT_SIMILAR_SUCCESS:
            return {
                ...state,
                productSimilars: action.productSimilars,
                msgSimilar: '',
            };
        case actionTypes.GET_PRODUCT_SIMILAR_FAIL:
            return {
                ...state,
                msgSimilar: action.productSimilars,
            };

        case actionTypes.GET_PRODUCT_FILTER_SUCCESS:
            return {
                ...state,
                productFilters: action.productFilters,
                statusFilter: true,
                msgFilter: null,
            };

        case actionTypes.GET_PRODUCT_FILTER_FAIL:
            return {
                ...state,
                productFilters: null,
                statusFilter: false,
                msgFilter: action.productFilters,
            };

        default:
            return state;
    }
};

export default managerProductReducer;
