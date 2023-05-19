import actionTypes from './actionTypes';

import { apiChartOrder, apiChartRevenueMonth } from '~/service/chart';

export const chartRevenueMonth = () => async (dispatch) => {
    const response = await apiChartRevenueMonth();

    if (response?.data.err === 0) {
        dispatch({
            type: actionTypes.CHART_REVENUE_MOUTH,
            response: response.data.response,
        });
    }
};

export const chartOrder = () => async (dispatch) => {
    const response = await apiChartOrder();

    if (response?.data.err === 0) {
        dispatch({
            type: actionTypes.CHART_ORDER,
            response: response.data.response,
        });
    }
};

export const resetChart = () => ({
    type: actionTypes.RESET_CHART,
});
