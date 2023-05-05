import actionTypes from '../actions/actionTypes';

const initState = {
    msgAdd: '',
    msgGet: '',
    msgGetAll: '',
    msgPut: '',
    msgDelete: '',
    colors: [],
    color: {},
    statusAdd: false,
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
    statusDelete: false,
};

const managerColorReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COLOR_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.ADD_COLOR_FAIL:
            return {
                ...state,
                statusAdd: false,
                msgAdd: action.msg,
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.GET_ALL_COLOR_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: true,
                statusPut: false,
                statusDelete: false,
                colors: action.colors,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.GET_ALL_COLOR_FAIL:
            return {
                ...state,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                statusDelete: false,
                msgGetAll: action.colors,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgDelete: '',
            };

        case actionTypes.GET_AN_COLOR_SUCCESS:
            return {
                ...state,
                statusGet: true,
                color: action.color,
                msgGet: '',
                msgAdd: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.GET_AN_COLOR_FAIL:
            return {
                ...state,
                statusGet: false,
                msgGet: action.color,
                msgAdd: '',
                msgGetAll: '',
                msgPut: '',
                msgDelete: '',
            };
        case actionTypes.PUT_COLOR_SUCCESS:
            return {
                ...state,
                statusPut: true,
                msgAdd: '',
                msgGet: '',
                msgPut: '',
                msgGetAll: '',
                msgDelete: '',
            };
        case actionTypes.PUT_COLOR_FAIL:
            return {
                ...state,
                statusPut: false,
                msgPut: action.msg,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgDelete: '',
            };
        case actionTypes.DELETE_COLOR_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                msgDelete: action.msg,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
            };
        case actionTypes.DELETE_COLOR_FAIL:
            return {
                ...state,
                msgDelete: action.msg,
                statusDelete: false,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
                msgPut: '',
            };
        default:
            return state;
    }
};

export default managerColorReducer;
