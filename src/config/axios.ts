import axios, { AxiosResponse } from 'axios';
import { ROUTES } from '../components/util/constants';
import { getTokenStorage } from '../components/util/storage';



export type APIResponse<T = any> = {
    items?: T[];
    data?: T;
    error?: {
        code: string;
        message: string;
    };
    success?: boolean;
    remarks?: any;
};




export const publicApi = (subPath = '') => {
    const api = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/${subPath}`,

    });

    api.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response: AxiosResponse<APIResponse>) => {
            return checkErrorCode(response);
        },
        (error) => {
            return checkErrorCode(error.response);
        }
    );

    return api;
};

// need have token auth
export const privateApi = (subPath = '') => {
    const api = axios.create({
        // withCredentials: true,
        baseURL: `${process.env.REACT_APP_API_URL}/${subPath}`,
        headers: { 'Content-Type': 'application/json' },
    });

    api.interceptors.request.use(
        async (config) => {
            const token = getTokenStorage();
            if (config.headers) config.headers.authorization = `Bearer ${token.accessToken}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        async (response: AxiosResponse<APIResponse, any>) => {
            return checkErrorCode(response);
        },
        async (error) => {
            if (error.response) {
                // Access Token was expired
                if (error.response.status === 401) {
                    getTokenStorage();
                    window.location.href = ROUTES.LOGIN;
                }
            }
            return checkErrorCode(error.response);
        }
    );

    return api;
};

async function checkErrorCode(response: AxiosResponse<APIResponse>) {
    try {
        switch (response.data.success) {
            case false:
                break;
            case true:
                break;

            default:
                break;
        }
        return response;
    } catch (error) {
        response = { ...response, data: { success: false, remarks: '' } };
        return response;
    }
}
