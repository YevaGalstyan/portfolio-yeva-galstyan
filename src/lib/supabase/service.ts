import { Experience } from "@/types/experience";
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

export const fetchExperience = async (): Promise<Experience[]> => {
  const { data, error } = await supabase.from<string, Experience>("Experience").select("*").order('startDate', { ascending: false });
  if (error) {
    console.error("Supabase fetchExperience error:", error);
    return [];
  }
  return data ?? [];
};