import { publicApi } from "../config/axios"

const subPath = "menu"

export const useMenu = () => {


    const POST_CREATE_MENU = async (name: string) => {
        const configApi = publicApi(subPath);

        const res = await configApi.post('', { name })
        return res.data;

    }



    return {
        POST_CREATE_MENU
    }
}