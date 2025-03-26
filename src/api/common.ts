import { privateApi, publicApi } from "../config/axios";


const useCommonApi = () => {
    const publicAPI = publicApi(); // public api url
    const privateAPI = privateApi(); // private api url

    const FETCH_PUBLIC_DATA = async (url: string) => {
        const res = await publicAPI.get(url);
        return res.data;
    };
    const FETCH_PRIVATE_DATA = async (url: string) => {
        const res = await privateAPI.get(url);
        return res.data;
    };
    return { FETCH_PUBLIC_DATA, FETCH_PRIVATE_DATA };
};

export { useCommonApi };
