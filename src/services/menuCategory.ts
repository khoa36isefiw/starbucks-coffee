
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

    return {
        POST_CREATE_CATEGORY
    }
}