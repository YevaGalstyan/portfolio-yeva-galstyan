import { create } from "zustand";
import { fetchEducation, fetchMemberships } from "../supabase/service";
import { Education } from "@/types/education";
import { Membership } from "@/types/membership";

interface MembershipState {
    membership: Membership[];
    loading: boolean;
    loaded: boolean;
    fetch: () => Promise<void>;
}

export const useMembershipStore = create<MembershipState>((set, get) => ({
    membership: [],
    loading: false,
    loaded: false,
    fetch: async () => {
        if (get().loaded) return;

        set({ loading: true });
        const data = await fetchMemberships();
        set({ membership: data, loading: false, loaded: true });
    },
}));
