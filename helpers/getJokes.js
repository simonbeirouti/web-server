import { supabase } from "../utils/supabase";

// Get all jokes
export async function getJokes() {
  const { data, error } = await supabase
    .from("jokes")
    .select("id, joke, details(name)")
    .order("id", { ascending: true });

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}

// Get single joke by ID
export async function getJokesByID(jokesID) {
  const { data, error } = await supabase
    .from("jokes")
    .select("id, joke, details(name)")
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
export async function updateJokesByID(jokesID, joke, author, user_id) {
  const { data, error } = await supabase
    .from("jokes")
    .update({ joke: joke, author: author, user_id })
    .eq("id", jokesID);

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}

// Post single joke
export async function postJoke(joke2, author2, user_id2) {
  const { data, error } = await supabase
    .from("jokes")
    .insert([{ joke: joke2, author: author2, user_id: user_id2 }]);

  if (error) {
    return { error: error.message };
  } else {
    return data;
  }
}
