import { create } from "zustand";
import { fetchExperience, fetchProjects } from "../supabase/service";
import { Experience } from "@/types/experience";

interface ExperienceState {
    experience: Experience[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useExperienceStore = create<ExperienceState>((set, get) => ({
    experience: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchExperience();
        console.log('sss')
        set({ experience: data, loading: false, loaded: true });
    },
}));
