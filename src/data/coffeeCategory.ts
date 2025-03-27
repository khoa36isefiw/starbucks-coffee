import useSWR from "swr";
import { useCommonApi } from "../api/common";

export const useAllMenuCategory = () => {
    const { FETCH_PUBLIC_DATA } = useCommonApi();
    const key = '/menu-category'  // this key will be passed into FETCH_PUBLIC_DATA function as a parameter
    const { data, mutate, error } = useSWR(key, FETCH_PUBLIC_DATA)
    const loading = !data && !error;

    return {
        loading,
        category: data || {},
        mutate
    }
}


export const useMenuCategoryById = (id: number) => {
    const { FETCH_PUBLIC_DATA } = useCommonApi();
    const key = `/menu-category/${id}`  // this key will be passed into FETCH_PUBLIC_DATA function as a parameter
    const { data, mutate, error } = useSWR(key, FETCH_PUBLIC_DATA)
    const loading = !data && !error;

    return {
        isLoading:loading,
        category: data || {},
        mutate
    }
}
