import actionTypes from '../actions/actionTypes';

const initState = {
    msg: '',
    categories: [],
    category: {},
    statusAdd: false,
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
    statusDelete: false,
};

const managerCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msg: '',
            };
        case actionTypes.ADD_CATEGORY_FAIL:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msg: action.msg,
            };
        case actionTypes.GET_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: true,
                statusPut: false,
                statusDelete: false,
                categories: action.categories,
                msg: '',
            };
        case actionTypes.GET_ALL_CATEGORY_FAIL:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msg: action.categories,
            };

        case actionTypes.GET_AN_CATEGORY_SUCCESS:
            return {
                ...state,
                statusGet: true,
                statusAdd: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                category: action.category,
                msg: '',
            };
        case actionTypes.GET_AN_CATEGORY_FAIL:
            return {
                ...state,
                statusGet: false,
                statusAdd: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,

                msg: action.category,
            };
        case actionTypes.PUT_CATEGORY_SUCCESS:
            return {
                ...state,
                statusPut: true,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusDelete: false,
                msg: '',
            };
        case actionTypes.PUT_CATEGORY_FAIL:
            return {
                ...state,
                statusPut: false,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusDelete: false,
                msg: action.msg,
            };
        case actionTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                msg: '',
            };
        case actionTypes.DELETE_CATEGORY_FAIL:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msg: action.msg,
            };
        default:
            return state;
    }
};

export default managerCategoryReducer;
