import actionTypes from '../actions/actionTypes';

const initState = {
    msgGet: '',
    msgDelete: '',
    msgAdd: '',
    msgGetAll: '',
    msgPut: '',
    admins: [],
    admin: {},
};

const managerAdminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ADMIN_SUCCESS:
            return {
                ...state,
                msgAdd: action.msg,
            };
        case actionTypes.ADD_ADMIN_FAIL:
            return {
                ...state,
                msgAdd: action.msg,
            };
        case actionTypes.GET_ALL_ADMIN_SUCCESS:
            return {
                ...state,
                admins: action.admins || [],
            };
        case actionTypes.GET_ALL_ADMIN_FAIL:
            return {
                ...state,
                msgGetAll: action.admins,
            };

        case actionTypes.GET_AN_ADMIN_SUCCESS:
            return {
                ...state,
                admin: action.admin || {},
            };
        case actionTypes.GET_AN_ADMIN_FAIL:
            return {
                ...state,
                msgGet: action.admin,
            };
        case actionTypes.PUT_ADMIN_SUCCESS:
            return {
                ...state,
                msgPut: action.admin || {},
            };
        case actionTypes.PUT_ADMIN_FAIL:
            return {
                ...state,
                msgGet: action.admin,
            };
        case actionTypes.DELETE_ADMIN_SUCCESS:
            return {
                ...state,
                msgDelete: action.msg,
            };
        case actionTypes.DELETE_ADMIN_FAIL:
            return {
                ...state,
                msgDelete: action.msg,
            };
        default:
            return state;
    }
};

export default managerAdminReducer;
