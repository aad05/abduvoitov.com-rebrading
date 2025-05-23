import { supabase } from "@/configs/supabase";
import { IBlog } from "@/interfaces/blog.interface";

export async function getBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as IBlog[];
}

export async function getBlog(slug: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single()

    if(error) {
      throw new Error(error.message);
    }

    return data as IBlog
}