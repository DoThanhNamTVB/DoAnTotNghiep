import actionTypes from '../actions/actionTypes';

const initState = {
    msgGet: '',
    msgDelete: '',
    msgAdd: '',
    msgGetAll: '',
    users: [],
    user: {},
};

const managerUserReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                users: action.users,
            };
        case actionTypes.GET_ALL_USER_FAIL:
            return {
                ...state,
                msgGetAll: action.users,
            };

        case actionTypes.GET_AN_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.GET_AN_USER_FAIL:
            return {
                ...state,
                msgGet: action.user,
            };
        default:
            return state;
    }
};

export default managerUserReducer;
