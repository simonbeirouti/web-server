import { supabase } from "../../../utils/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data: jokes, error } = await supabase
      .from("jokes")
      .select("id, joke")
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
