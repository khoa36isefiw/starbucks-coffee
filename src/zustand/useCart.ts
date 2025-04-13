import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IProduct {
    id: string;
    name: string;
    price: number;
}

interface ICartState {
    products: IProduct[];
    addProduct: (product: IProduct) => void;
    removeProduct: (id: string) => void;
    clearCart: () => void;
}


export const useCart = create<ICartState>()(
    persist
        (
            (set) => ({
                products: [],
                addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
                removeProduct: (id) => set((state) => ({
                    products: state.products.filter((product) => product.id !== id)
                })),
                clearCart: () => set({ products: [] }),
            }),
            {
                name: "cart-storage", // unique name

            }
        ));