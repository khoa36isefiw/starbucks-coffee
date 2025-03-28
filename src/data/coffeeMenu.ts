import useSWR from "swr";
import { useCommonApi } from "../api/common";

export const useAllCoffeeMenu = () => {
    const { FETCH_PUBLIC_DATA } = useCommonApi();
    const key = '/menu-item-category'  // this key will be passed into FETCH_PUBLIC_DATA function as a parameter
    const { data, mutate, error } = useSWR(key, FETCH_PUBLIC_DATA)
    const loading = !data && !error;

    return {
        loading,
        coffeeMenu: data || {},
        mutate
    }
}


export const useCoffeeMenuById = (id: number) => {
    const { FETCH_PUBLIC_DATA } = useCommonApi();
    const key = `/menu-item-category/${id}`  // this key will be passed into FETCH_PUBLIC_DATA function as a parameter
    const { data, mutate, error } = useSWR(key, FETCH_PUBLIC_DATA)
    const loading = !data && !error;

    return {
        isLoading: loading,
        coffeeMenu: data || {},
        mutate
    }
}
