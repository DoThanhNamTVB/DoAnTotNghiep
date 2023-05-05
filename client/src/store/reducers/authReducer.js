import actionTypes from '../actions/actionTypes';

const initState = {
    isLoggedIn: false,
    token: null,
    user: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg: '',
            };

        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null,
            };

        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: '',
                user: null,
                msgGetCurrent: '',
            };

        case actionTypes.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                user: action.data,
            };
        case actionTypes.GET_CURRENT_USER_FAIL:
            return {
                ...state,
                user: null,
                msgGetCurrent: action.data,
            };
        default:
            return state;
    }
};

export default authReducer;
