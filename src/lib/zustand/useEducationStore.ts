import { create } from "zustand";
import { fetchEducation } from "../supabase/service";
import { Education } from "@/types/education";

interface EducationState {
    education: Education[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useEducationStore = create<EducationState>((set, get) => ({
    education: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchEducation();
        set({ education: data, loading: false, loaded: true });
    },
}));
