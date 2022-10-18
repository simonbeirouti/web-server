import { supabase } from "../../../utils/supabase";

export default async function jokeIndex(req, res) {
  if (req.method === "GET") {
    const { data: jokes, error } = await supabase
      .from("jokes")
      .select("id, joke, details(name)")
      .order("id", { ascending: true });
    if (error) {
      res.status(400).json({ error: error.message });
    }
    if (jokes) {
      res.status(200).json(jokes);
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
