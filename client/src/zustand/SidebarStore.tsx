import { create } from "zustand";

interface SidebarStore {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
    isOpen: true,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));