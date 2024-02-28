import axiosConfig from '../axiosConfig';

export const apiRegister = async (payload) => {
    try {
        const reponse = await axiosConfig({
            method: 'post',
            url: '/api/auth/register',
            data: payload,
        });
        return reponse;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiLogin = async (payload) => {
    try {
        const reponse = await axiosConfig({
            method: 'post',
            url: '/api/auth/login',
            data: payload,
        });
        return reponse;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiLoginAdmin = async (payload) => {
    try {
        const reponse = await axiosConfig({
            method: 'post',
            url: '/api/auth/loginAdmin',
            data: payload,
        });
        return reponse;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetCurrentUser = async () => {
    try {
        const reponse = await axiosConfig({
            method: 'get',
            url: '/api/auth/me',
        });
        return reponse;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiGetCurrentAdmin = async () => {
    try {
        const reponse = await axiosConfig({
            method: 'get',
            url: '/api/auth/admin',
        });
        return reponse;
    } catch (error) {
        throw new Error(error);
    }
};

export const apiPutPasswordUser = async (payload, id) => {
    try {
        const reponse = await axiosConfig({
            method: 'put',
            url: '/api/auth/updatePassword/' + id,
            data: payload,
        });
        return reponse;
    } catch (error) {
        throw new Error(error);
    }
};
