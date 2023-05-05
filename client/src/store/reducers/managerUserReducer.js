import actionTypes from '../actions/actionTypes';

const initState = {
    msg: '',
    users: [],
    user: {},
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
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
            };
        case actionTypes.GET_ALL_USER_FAIL:
            return {
                ...state,
                msg: action.users,
            };

        case actionTypes.GET_AN_USER_SUCCESS:
            return {
                ...state,
                statusGet: true,
                user: action.user,
            };
        case actionTypes.GET_AN_USER_FAIL:
            return {
                ...state,
                statusGet: false,
                msg: action.user,
            };

        case actionTypes.PUT_USER_SUCCESS:
            return {
                ...state,
                statusPut: true,
                user: action.user,
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
