import { Project } from "@/types/project";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase.from<string, Project>("Project").select("*").order('startDate', { ascending: false });
  if (error) {
    console.error("Supabase fetchProjects error:", error);
    return [];
  }
  return data ?? [];
};
