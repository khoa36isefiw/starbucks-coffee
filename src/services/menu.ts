import { publicApi } from "../config/axios"

const subPath = "menu"

export const useMenu = () => {

    const POST_CREATE_MENU = async (name: string) => {
        const configApi = publicApi(subPath);
        const res = await configApi.post('', { name })
        return res.data;

    }

    const POST_EDIT_MENU = async (id: number, name: string) => {
        const configApi = publicApi(`${subPath}/${id}`);
        const res = await configApi.put('', { name })
        return res.data;
    }


    const DELETE_MENU = async (id: number) => {
        const configApi = publicApi(`${subPath}/${id}`);
        const res = await configApi.delete('');
        return res.data;
    }



    return {
        POST_CREATE_MENU,
        POST_EDIT_MENU,
        DELETE_MENU
    }
}