import { create } from "zustand";
import { fetchTechStack, fetchTraining } from "../supabase/service";
import { TechStack } from "@/types/techStack";
import { Training } from "@/types/training";

interface TrainingState {
    training: Training[];
    trainingOverview: Training[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useTrainingStore = create<TrainingState>((set, get) => ({
    training: [],
    trainingOverview: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchTraining();
        set({
            training: data,
            trainingOverview: data.filter(t => t.showInOverview === true),
            loading: false,
            loaded: true
        });
    },
}));
