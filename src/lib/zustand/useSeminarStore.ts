import { create } from "zustand";
import { fetchSeminars } from "../supabase/service";
import { Seminar } from "@/types/seminar";

interface SeminarState {
    seminar: Seminar[];
    seminarOverview: Seminar[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useSeminarStore = create<SeminarState>((set, get) => ({
    seminar: [],
    seminarOverview: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchSeminars();
        set({
            seminar: data,
            seminarOverview: data.filter(t => t.showInOverview === true),
            loading: false,
            loaded: true
        });
    },
}));
