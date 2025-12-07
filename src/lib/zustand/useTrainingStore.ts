import { create } from "zustand";
import { fetchTechStack, fetchTraining } from "../supabase/service";
import { TechStack } from "@/types/techStack";
import { Trainging } from "@/types/training";

interface TrainingState {
    training: Trainging[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useTrainingStore = create<TrainingState>((set, get) => ({
    training: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchTraining();
        set({ training: data, loading: false, loaded: true });
    },
}));
