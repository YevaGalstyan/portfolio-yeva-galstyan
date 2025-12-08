import { Education } from "@/types/education";
import { Experience } from "@/types/experience";
import { Project } from "@/types/project";
import { TechStack } from "@/types/techStack";
import { Training } from "@/types/training";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fetch function for Projects
export const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase.from<string, Project>("Project").select("*").order('startDate', { ascending: false });
  if (error) {
    console.error("Supabase fetchProjects error:", error);
    return [];
  }
  return data ?? [];
};

// Fetch function for Experience
export const fetchExperience = async (): Promise<Experience[]> => {
  const { data, error } = await supabase.from<string, Experience>("Experience").select("*").order('startDate', { ascending: false });
  if (error) {
    console.error("Supabase fetchExperience error:", error);
    return [];
  }
  return data ?? [];
};

// Fetch function for TechStack
export const fetchTechStack = async (): Promise<TechStack[]> => {
  const { data, error } = await supabase.from<string, TechStack>("Techstack").select("*");
  if (error) {
    console.error("Supabase fetchTechStack error:", error);
    return [];
  }
  return data ?? [];
};

// Fetch function for Education
export const fetchEducation = async (): Promise<Education[]> => {
  const { data, error } = await supabase.from<string, Education>("Education").select("*").order('startDate', { ascending: false });
  if (error) {
    console.error("Supabase fetchEducation error:", error);
    return [];
  }
  return data ?? [];
};

// Fetch function for Training
export const fetchTraining = async (): Promise<Training[]> => {
  const { data, error } = await supabase.from<string, Training>("Training").select("*").order('startDate', { ascending: false });
  if (error) {
    console.error("Supabase fetchTraining error:", error);
    return [];
  }
  return data ?? [];
};