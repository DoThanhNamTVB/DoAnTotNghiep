import actionTypes from '../actions/actionTypes';

const initState = {
    msg: '',
    admins: [],
    admin: {},
    statusAdd: false,
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
    statusDelete: false,
};

const managerAdminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ADMIN_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                msg: action.msg,
            };
        case actionTypes.ADD_ADMIN_FAIL:
            return {
                ...state,
                statusAdd: false,
                msg: action.msg,
            };

        case actionTypes.GET_ALL_ADMIN_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGet: false,
                statusGetAll: true,
                statusPut: false,
                statusDelete: false,
                admins: action.admins || [],
            };
        case actionTypes.GET_ALL_ADMIN_FAIL:
            return {
                ...state,
                statusGetAll: false,
                msg: action.admins,
            };

        case actionTypes.GET_AN_ADMIN_SUCCESS:
            return {
                ...state,
                statusGet: true,
                admin: action.admin || {},
            };
        case actionTypes.GET_AN_ADMIN_FAIL:
            return {
                ...state,
                statusGet: false,
                msg: action.admin,
            };

        case actionTypes.PUT_ADMIN_SUCCESS:
            return {
                ...state,
                statusPut: true,
                msg: action.admin || {},
            };
        case actionTypes.PUT_ADMIN_FAIL:
            return {
                ...state,
                statusPut: false,
                msg: action.admin,
            };

        case actionTypes.DELETE_ADMIN_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                msg: action.msg,
            };
        case actionTypes.DELETE_ADMIN_FAIL:
            return {
                ...state,
                statusDelete: false,
                msg: action.msg,
            };
        default:
            return state;
    }
};

export default managerAdminReducer;
