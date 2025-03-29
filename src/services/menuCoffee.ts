
import { publicApi } from "../config/axios";

const subPath = "menu-item-category"


export const useMenuCoffee = () => {

    const POST_CREATE_MENU_CATEGORY = async (data: {
        image: string,
        name: string,
        description: string,
        categoryId: number,
    }) => {
        const config = publicApi(subPath);
        const res = await config.post('', data)
        return res.data;
    }


    const PUT_UPDATE_MENU_CATEGORY = async (id: number, data: {
        image?: string,
        name?: string,
        description?: string,
        categoryId?: number,
    }) => {
        const configApi = publicApi(`${subPath}/${id}`);
        const res = await configApi.put('', data)
        return res.data;
    }



    const DELTE_MENU_CATEGORY = async (id: number) => {
        const configApi = publicApi(`${subPath}/${id}`);
        const res = await configApi.delete('')
        return res.data;
    }





    return {
        POST_CREATE_MENU_CATEGORY,
        PUT_UPDATE_MENU_CATEGORY, DELTE_MENU_CATEGORY

    }
}