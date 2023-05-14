import actionTypes from '../actions/actionTypes';

const initState = {
    msgPutInfo: '',
    msgAll: '',
    users: [],
    user: {},
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
    statusPutInfo: false,
};

const managerUserReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                statusGet: false,
                statusGetAll: true,
                statusPut: false,
                users: action.users,
                msgAll: '',
                statusPutInfo: false,
            };
        case actionTypes.GET_ALL_USER_FAIL:
            return {
                ...state,
                msgAll: action.users,
            };

        case actionTypes.GET_AN_USER_SUCCESS:
            return {
                ...state,
                statusGet: true,
                user: action.user,
                msg: '',
            };
        case actionTypes.GET_AN_USER_FAIL:
            return {
                ...state,
                statusGet: false,
                msg: action.user,
            };

        case actionTypes.PUT_INFO_USER_SUCCESS:
            return {
                ...state,
                statusPutInfo: true,
                msgPutInfo: '',
            };
        case actionTypes.PUT_INFO_USER_FAIL:
            return {
                ...state,
                statusPutInfo: false,
                msgPutInfo: action.msg,
            };

        case actionTypes.PUT_USER_SUCCESS:
            return {
                ...state,
                statusPut: true,
                msg: '',
            };
        case actionTypes.PUT_USER_FAIL:
            return {
                ...state,
                statusPut: false,
                msg: action.user,
            };
        default:
            return state;
    }
};

export default managerUserReducer;
