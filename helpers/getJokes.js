import { supabase } from "../utils/supabase";

// Get single joke by ID
export async function getJokesByID(jokesID) {
  const { data, error } = await supabase
    .from("jokes")
    .select("id, joke)")
    .eq("id", jokesID)
    .single();

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}

// Delete single joke by ID
export async function deleteJokesByID(jokesID) {
  const { data, error } = await supabase
    .from("jokes")
    .delete()
    .eq("id", jokesID);

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}

// Update single joke by ID
export async function updateJokesByID(jokesID, joke, user_id) {
  const { data, error } = await supabase
    .from("jokes")
    .update({ joke: joke, user_id })
    .eq("id", jokesID);

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}

// Post single joke
export async function postJoke(joke, user_id) {
  const { data, error } = await supabase
    .from("jokes")
    .insert([{ joke: joke, user_id: user_id }]);

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}
