import actionTypes from '../actions/actionTypes';

const initState = {
    dataRevenueMonth: [],
    dataOrder: [],
};

const chartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHART_REVENUE_MOUTH:
            return {
                ...state,
                dataRevenueMonth: action.response,
            };

        case actionTypes.CHART_ORDER:
            return {
                ...state,
                dataOrder: action.response,
            };

        case actionTypes.RESET_CHART:
            return {
                ...state,
                dataRevenueMonth: [],
                dataOrder: [],
            };

        default:
            return state;
    }
};

export default chartReducer;
