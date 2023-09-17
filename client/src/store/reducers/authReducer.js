import actionTypes from '../actions/actionTypes';

const initState = {
    isLoggedIn: false,
    token: null,
    user: null,
    statusUpdatePW: false,
    msgUpdatePW: '',
    role: '',
    adminCurrent: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.RESET_MSG:
            return {
                ...state,
                msgUpdatePW: null,
            };
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg: '',
                statusUpdatePW: false,
            };

        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null,
                statusUpdatePW: false,
            };

        case actionTypes.LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                role: action.role,
                msg: '',
                statusUpdatePW: false,
            };

        case actionTypes.LOGIN_ADMIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                role: null,
                msg: action.data,
                token: null,
                statusUpdatePW: false,
            };

        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: null,
                token: null,
                msg: '',
                user: null,
                adminCurrent: null,
                msgGetCurrent: '',
                role: null,
            };
        case actionTypes.RESET:
            return {
                ...state,
                isLoggedIn: null,
                token: null,
                msg: '',
                user: null,
                adminCurrent: null,
                msgGetCurrent: '',
                role: null,
            };

        case actionTypes.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                user: action.data,
                msgUpdatePW: '',
            };
        case actionTypes.GET_CURRENT_USER_FAIL:
            return {
                ...state,
                user: null,
                msgGetCurrent: action.data,
            };

        case actionTypes.GET_CURRENT_ADMIN_SUCCESS:
            return {
                ...state,
                adminCurrent: action.data,
            };
        case actionTypes.GET_CURRENT_ADMIN_FAIL:
            return {
                ...state,
                adminCurrent: null,
                msgGetCurrent: action.data,
            };

        case actionTypes.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                statusUpdatePW: true,
                msgUpdatePW: '',
                isLoggedIn: false,
                token: null,
                msg: '',
                user: null,
                msgGetCurrent: '',
            };
        case actionTypes.UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                msgUpdatePW: action.data,
                statusUpdatePW: false,
            };
        default:
            return state;
    }
};

export default authReducer;
