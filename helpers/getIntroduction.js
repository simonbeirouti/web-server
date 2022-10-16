import { supabase } from "../utils/supabase";

export async function getIntroduction() {
  const { data, error } = await supabase
    .from("introduction")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}
