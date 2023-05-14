import actionTypes from '../actions/actionTypes';

const initState = {
    msg: '',
    settings: [],
    setting: {},
    statusGet: false,
    statusGetAll: false,
    statusPut: false,
};

const settingReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_SETTING_SUCCESS:
            return {
                ...state,
                statusGet: false,
                statusPut: false,
                statusGetAll: true,
                settings: action.response || [],
                msg: '',
            };
        case actionTypes.GET_ALL_SETTING_FAIL:
            return {
                ...state,
                statusGet: false,
                statusGetAll: false,
                statusPut: false,
                settings: [],
                msg: action.response,
            };

        case actionTypes.GET_SETTING_SUCCESS:
            return {
                ...state,
                statusGet: true,
                statusPut: false,
                setting: action.response || {},
                msg: '',
            };
        case actionTypes.GET_SETTING_FAIL:
            return {
                ...state,
                statusGet: false,
                statusPut: false,
                setting: {},
                msg: action.response,
            };

        case actionTypes.PUT_SETTING_SUCCESS:
            return {
                ...state,
                statusPut: true,
                settings: [],
                setting: {},
                msg: action.msg,
            };
        case actionTypes.PUT_SETTING_FAIL:
            return {
                ...state,
                statusPut: false,
                msg: '',
                settings: [],
                setting: {},
            };

        default:
            return state;
    }
};

export default settingReducer;
