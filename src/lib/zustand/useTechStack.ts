import { create } from "zustand";
import { fetchTechStack } from "../supabase/service";
import { TechStack } from "@/types/techStack";

interface TechStackState {
    techStack: TechStack[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useTechStackStore = create<TechStackState>((set, get) => ({
    techStack: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchTechStack();
        set({ techStack: data, loading: false, loaded: true });
    },
}));
