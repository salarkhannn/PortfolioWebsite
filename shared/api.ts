import { supabase } from "@/lib/supabase";

export async function getPosterUrls() {
  const { data, error } = await supabase.storage
    .from("posters")
    .list("", {
      limit: 100,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error listing posters:", error.message);
    return [];
  }

  if (!data || data.length === 0) {
    console.log("No posters found.");
    return [];
  }

  const urls = data.map(
    (item) =>
      supabase.storage
        .from("posters")
        .getPublicUrl(item.name).data.publicUrl
  );

  return urls;
}
