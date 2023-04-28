import actionTypes from '../actions/actionTypes';

const initState = {
    msgGet: '',
    msgDelete: '',
    msgAdd: '',
    msgGetAll: '',
    msgPut: '',
    categories: [],
    category: {},
};

const managerCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                msgAdd: action.msg,
            };
        case actionTypes.ADD_CATEGORY_FAIL:
            return {
                ...state,
                msgAdd: action.msg,
            };
        case actionTypes.GET_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.categories || [],
            };
        case actionTypes.GET_ALL_CATEGORY_FAIL:
            return {
                ...state,
                msgGetAll: action.categories,
            };

        case actionTypes.GET_AN_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.category || {},
            };
        case actionTypes.GET_AN_CATEGORY_FAIL:
            return {
                ...state,
                msgGet: action.category,
            };
        case actionTypes.PUT_CATEGORY_SUCCESS:
            return {
                ...state,
                msgPut: action.category || {},
            };
        case actionTypes.PUT_CATEGORY_FAIL:
            return {
                ...state,
                msgGet: action.category,
            };
        case actionTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                msgDelete: action.msg,
            };
        case actionTypes.DELETE_CATEGORY_FAIL:
            return {
                ...state,
                msgDelete: action.msg,
            };
        default:
            return state;
    }
};

export default managerCategoryReducer;
