
import { publicApi } from "../config/axios";

const subPath = "menu-category"


export const useMenuCategory = () => {

    const POST_CREATE_CATEGORY = async (data: {
        imageCategory: string;
        menuCategory: string;
        menuId: number
    }) => {
        const config = publicApi(subPath);
        const res = await config.post('', data)
        return res.data;
    }


    const PUT_UPDATE_CATEGORY = async (id: number, data: {
        imageCategory?: string;
        menuCategory?: string;
        menuId?: number;
    }) => {
        const configApi = publicApi(`${subPath}/${id}`);
        const res = await configApi.put('', data)
        return res.data;
    }





    return {
        POST_CREATE_CATEGORY,
        PUT_UPDATE_CATEGORY
    }
}