import axiosConfig from '../axiosConfig';

export const apiChartRevenueMonth = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/chart/chartRevenueMonth',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiChartOrder = () =>
    new Promise(async (relsove, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/chart/chartOrder',
            });
            relsove(response);
        } catch (error) {
            reject(error);
        }
    });
