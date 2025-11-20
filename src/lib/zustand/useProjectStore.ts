import { Project } from "@/types/project";
import { create } from "zustand";
import { fetchProjects } from "../supabase/service";

interface ProjectState {
    projects: Project[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
    projects: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchProjects();
        set({ projects: data, loading: false, loaded: true });
    },
}));
