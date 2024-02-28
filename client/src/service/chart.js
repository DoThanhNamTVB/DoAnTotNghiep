import axiosConfig from '../axiosConfig';

export const apiChartRevenueMonth = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/chart/chartRevenueMonth',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiChartOrder = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/chart/chartOrder',
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
