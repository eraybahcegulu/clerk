import { create } from "zustand";

interface ISidebarStore {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
    isOpen: true,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));