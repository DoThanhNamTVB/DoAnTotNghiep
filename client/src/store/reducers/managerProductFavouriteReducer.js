import actionTypes from '../actions/actionTypes';

const initState = {
    msgAdd: '',
    msgGetAll: '',
    msgDelete: '',
    productFavourites: [],
    statusAdd: false,
    statusGetAll: false,
    statusDelete: false,
};

const managerProductFavourite = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_FAVOURITE_SUCCESS:
            return {
                ...state,
                statusAdd: true,
                msgAdd: '',
                msgGetAll: '',
                msgDelete: '',
            };
        case actionTypes.ADD_PRODUCT_FAVOURITE_FAIL:
            return {
                ...state,
                statusAdd: false,
                msgAdd: action.msg,
                msgGetAll: '',
                msgDelete: '',
            };
        case actionTypes.GET_ALL_PRODUCT_FAVOURITE_SUCCESS:
            return {
                ...state,
                statusAdd: false,
                statusGetAll: true,
                statusDelete: false,
                productFavourites: action.productFavourites,
                msgAdd: '',
                msgDelete: '',
            };
        case actionTypes.GET_ALL_PRODUCT_FAVOURITE_FAIL:
            return {
                ...state,
                statusGetAll: false,
                statusDelete: false,
                msgGetAll: [],
                msgAdd: '',
                msgDelete: '',
            };

        case actionTypes.DELETE_PRODUCT_FAVOURITE_SUCCESS:
            return {
                ...state,
                statusDelete: true,
                msgDelete: '',
                msgAdd: '',
                msgGetAll: '',
            };
        case actionTypes.DELETE_PRODUCT_FAVOURITE_FAIL:
            return {
                ...state,
                msgDelete: action.msg,
                statusDelete: false,
                msgAdd: '',
                msgGet: '',
                msgGetAll: '',
            };
        default:
            return state;
    }
};

export default managerProductFavourite;
