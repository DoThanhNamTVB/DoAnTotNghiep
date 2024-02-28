import axiosConfig from '../axiosConfig';

export const apiAddProductFavourite = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/managerProductFavourite/create',
            data: payload,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetAllProductFavourite = async (userId) => {
    try {
        // console.log('api');
        const response = await axiosConfig({
            method: 'get',
            url: '/api/managerProductFavourite/getAll/' + userId,
        });
        // console.log(response);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiDeleteProductFavourite = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/managerProductFavourite/delete',
            data: payload,
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
