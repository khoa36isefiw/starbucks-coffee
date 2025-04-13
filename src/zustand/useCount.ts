import { create } from "zustand";
import { persist } from 'zustand/middleware'; // middleware for persisting state

interface ICount {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}


export const useCount = create<ICount>()(
    persist(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
        }),
        {
            // key in local storage
            name: 'count-storage', // name of the item in the storage (must be unique)
        }
    )
);