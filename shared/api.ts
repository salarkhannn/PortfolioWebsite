import { supabase } from "@/lib/supabase";

export async function getPosterUrls() {
  const { data, error } = await supabase.storage.from("Posters").list("posters/");
  if (error) throw error;

  const urls = data.map((item) =>
    supabase.storage.from("Posters").getPublicUrl(`posters/${item.name}`).data.publicUrl
  )

  return urls;
}